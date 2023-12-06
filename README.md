# EmsiAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Lancer le fichier Json qui contient les Users :  
json-server -w  Data/db.json -p 8089  
![Json](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/b8aaa80e-dda4-4d30-9e01-11a79ea88d33)  

## Presentation de l'app :  
### Guards :
#### Authentication guard : 
Permet de vérifier si l'utilisateur n'est pas connecté ; dans ce cas, l'accès aux autres routes ne lui est pas accordé.     
![authenticationGuards](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/8f715e01-3ee6-4e91-bb46-8f2802b4496d)  

#### Autorization guard :
Permet de vérifier si la personne authentifiée n'est pas un administrateur ; dans ce cas, elle n'aura pas l'autorisation de créer un produit.    
![authorizationGuards](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/f607ab00-2ad0-4649-8d0c-44bd841a25b1)


### Captures :  
## En Tant Admin : 
![Login](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/fdd998b2-2d35-4b26-a4dc-044f21232fa3)
#### Visualiser la liste des produits:    
![VisualiserAdmin](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/760d1b90-993d-4b0c-9ddd-8a7b2b286706)
#### Creation d'un Produit :  
![CreateProductAdmin](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/cbef5f5a-74e8-48c4-984c-d67cdbf1bfcb)

## En Tant User :
![LoginUser](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/9efbbb32-18e8-4141-bb36-c44498b6c89c)  
#### Visualiser la liste des produits  
![VisualiserUser](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/02105a6e-edd2-433c-8940-82e3f9b23e1e)  
#### Creation d'un Produit :  
![CreateProductUser](https://github.com/Bouchghel/Gestion-des-Produits-Angular/assets/93221225/da616436-eadc-42d5-bd46-49835b24e061)

