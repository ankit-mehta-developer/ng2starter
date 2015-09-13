@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\tsd\build\cli.js" %*
) ELSE (
  node  "%~dp0\node_modules\tsd\build\cli.js" %*
)