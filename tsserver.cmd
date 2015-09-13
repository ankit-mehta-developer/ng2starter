@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\typescript\bin\tsserver" %*
) ELSE (
  node  "%~dp0\node_modules\typescript\bin\tsserver" %*
)