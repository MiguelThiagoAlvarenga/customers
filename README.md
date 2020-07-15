# customers
Customer CRUD inVueJs and NodeJs

# Dependências

NodeJs  v12.18.1
npm: 6.14.5 
@vue/cli: 4.4.6
postgres: 11 ou superior.

# Front-end
Entrar no diretório /front

    npm install -f //Instalar as dependências
    
    npm run serve  //Rodas aplicação, por padrão executa http://localhost:8080

# BD
    Após instalando o postgres, criar banco com o nome 'customer' conforme está no arquivo.. /backend/conf/config.json
    Criar schemas 'app'
    
# Back-end
    entrar no direório /backend
    Executar  
            npm install -f
            npx sequelize-cli db:migrate
            npm run start
            
    
    
    
    