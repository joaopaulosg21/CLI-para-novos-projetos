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
                fs.mkdirSync(folderName)
                process.chdir(atualPath + '/' + folderName)
                fs.writeFile('server.js','teste',err =>{
                    if(err){
                        console.log(err)
                        return
                    }
                })
                fs.mkdirSync('database')
                process.chdir(atualPath + '/' + folderName + '/' + 'database')
                fs.writeFile('database.js','teste',err =>{
                    if(err){
                        console.log(err)
                        return
                    }
                })
                fs.mkdirSync('models')
                process.chdir(atualPath + '/' + folderName)
                fs.mkdirSync('controllers')
                console.log('Projeto criado')
                read.close()
            }catch(error){
                console.log(error)
                read.close()
            }
        })
    }
    
})