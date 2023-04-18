import * as FileSystem from 'expo-file-system'
import { readAsStringAsync } from 'expo-file-system'


export const writeFile = (data) => {
    //verifier le contenue de data
    
    try {

        //verifier si le fichier est vide
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
        if (fileInfo.exists) {
            //lire le fichier, et recup les donnees existantes
            const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt') //recupe le fichier sous forme de string 
            //trouver un moyen pour ajouter le contenue passe en param au contenu existant
        } else {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt')
        }
        //si non recuperer les donnees

        

    } caches(error) {
        console.log('erreur non catche writefile util.js', error)
    }
}