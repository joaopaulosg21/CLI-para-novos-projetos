import readline from 'readline'
import process from 'process'
import fs from 'fs'

const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

read.question('Digite o nome do projeto ',(folderName)=>{
    if(folderName){
        read.question('Digite o caminho onde será criado: ',(folder)=>{
            try{
                process.chdir(folder)
                const atualPath = process.cwd();

                //Pasta do projeto
                fs.mkdirSync(folderName)
                process.chdir(atualPath + '/' + folderName)
                fs.writeFile('server.js','',err =>{
                    if(err){
                        console.log(err)
                        return
                    }
                })

                //Pasta database
                fs.mkdirSync('database')
                process.chdir(atualPath + '/' + folderName + '/' + 'database')
                fs.writeFile('database.js','',err =>{
                    if(err){
                        console.log(err)
                        return
                    }
                })
                
                //Pasta models
                fs.mkdirSync('models')
                process.chdir(atualPath + '/' + folderName)

                //Pasta controllers
                fs.mkdirSync('controllers')
                process.chdir(atualPath + '/' + folderName)

                //Pasta routes
                fs.mkdirSync('routes')
                process.chdir(atualPath + '/' + folderName + '/' + 'routes')
                fs.writeFile('routes.js','',err => {
                    if(err){
                        console.log(err)
                        return
                    }
                })
                console.log('Projeto criado')
                read.close()
            }catch(error){
                console.log(error)
                read.close()
            }
        })
    }
    
})