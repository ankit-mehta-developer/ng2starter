@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\traceur\traceur" %*
) ELSE (
  node  "%~dp0\node_modules\traceur\traceur" %*
)