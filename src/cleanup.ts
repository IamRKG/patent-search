import * as ts from 'typescript';


function findUnusedExports(rootDir: string) {
  const program = ts.createProgram([rootDir], {});
  const checker = program.getTypeChecker();
  
  const unusedExports = new Set();
  
  program.getSourceFiles().forEach(sourceFile => {
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, node => {
        if (ts.isExportDeclaration(node) && node.moduleSpecifier) {
          const symbol = checker.getSymbolAtLocation(node.moduleSpecifier);
          if (!symbol || !symbol.exports || symbol.exports.size === 0) {
            unusedExports.add(sourceFile.fileName);
          }
        }
      });
    }
  });
  
  return Array.from(unusedExports);
}

const unusedFiles = findUnusedExports('./src');
console.log('Unused exports found in:', unusedFiles);
