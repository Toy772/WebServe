--- comandos "nodejs" ---
--------------------------------------------------------------------------------------------------
npm init - y                        --->    cria a configuracao geral do projeto em detalhes

npm i <express>                     --->    instala pacotes com exemplo express

npm i <typescript> -D               --->    instala pacotes no modo local "modo dev"

npm uninstall <typescript>          --->    desinstala pacote

npm install tsc-watch --save-dev    --->    instal o nodemon (para atulizar o serve a cada atulizacao de codigo)

npx < comando >                       --->    execulta comandos de pacotes
------------------------------------------------------------------------------------------------

--- comandos "Vscode" ---
------------------------------------------------------
crlt + L    --->    Limpa terminal
crlt + D    --->    seleciona toda as varivais com msm nome 
------------------------------------------------------

--- comandos git ---
--------------------------------------------------------------------------------------------------------
git init                                    --->    inicializa um repositorio vazio

git add ou <.> para todos                   --->    adiciona arquivo ao git

git status                                  --->    visualiza o status do git

git commit -m "mensagem commit"             --->    commita

git branch -M "nome"                        --->    renomeia um branch

git remote add origin <(link repositorio)>  --->    set origem do git

git push -u origin                          --->    empurra os arquivos para o git

git checkout -b "nome branch"               --->    cria novo brench ou troca de brench

git merge                                   --->    junta um brench com atual logada

git clone                                   --->    copia todos os arquivos do repositorio github para maquina

git pull                                    --->    atualiza os arquivos da maquina com o do repositorio baixa os arquivos do repositorio pendentes

git log --oneline                           --->    visualiza commits hashs (codigo do commit e descricao)

git push origin +^:                         --->    deleta commits no repositorio

git reset HEAD~                             --->    reseta para o ultimo commit ou desejado
---------------------------------------------------------------------------------------------------------