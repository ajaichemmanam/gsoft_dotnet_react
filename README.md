# gsoft_dotnet_react
A sample app created using dotnet v6 backend and react frontend

## Screenshots

![screen1](https://raw.githubusercontent.com/ajaichemmanam/gsoft_dotnet_react/main/Screenshots/screen1.png)
![screen2](https://raw.githubusercontent.com/ajaichemmanam/gsoft_dotnet_react/main/Screenshots/screen2.png)
![screen3](https://raw.githubusercontent.com/ajaichemmanam/gsoft_dotnet_react/main/Screenshots/screen3.png)
![screen4](https://raw.githubusercontent.com/ajaichemmanam/gsoft_dotnet_react/main/Screenshots/screen4.png)


The project requirement is described below.

### Problem Statement in English

- Read all the requirements before you start.
- Don't forget to "Commit" and "Push" your code before the meeting.

#### Requirements

An idea in our innovation lab has been submitted and we need to build a proof of concept. We believe it would be possible to optimize transport logistics for delivery companies. For each product, you must determine the optimal transport that will maximize the profits related to the sale of the products. You will be evaluated according to the following criteria: Modeling, Solution, Syntax, Methodology and Retrospective.

#### Hypothesis

- Only one delivery per product can be in transit at a time. 
- All transports depart from the factory and arrive directly at the destination. 
- The coordinates are Cartesian and are in “(x,y)” format and in KM. 
- All trips are considered “as the crow flies” (disregard roads). 
- It is considered that the factory can produce an infinite amount of each product. 
- Each product is considered to be sold once it arrives at its destination. 
- You do not have to take into account the return of the transit. 
- Perishable products cannot take the train or the boat.

#### Data

**Products** are defined by the following attributes: 
- Name 
- Factory location (Cartesian point "(x,y)") 
- Destination (Cartesian point "(x,y)") 
- Weight (in kg) 
- Value (in $) 
- Type a value indicating whether a product is perishable or not.

**transits** are defined by the following attributes: 

- Type
- Capacity (in metric tons)
- Cost ($ per metric ton)
- Speed (km/h)

The application will have to display the **ideal transit** for each of the products, therefore the one that brings in the most profit. For each ideal transit, we want to know the **quantity delivered annually**, **the annual transport cost** and the **percentage of profit**.

#### Architecture
A client/server architecture is required. The results of the application must be visible on a web platform.  If possible, please use .NET Core for the server and React for the client app. It is recommended to take the [React Template of .NET](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react). A documentation to launch the application should be provided. 

Here is a [mockup](https://www.figma.com/file/XYRJIIYlpCJPyqJm9jSKOq/%5Bmaster%5D-Worksample-Developer?node-id=0%3A1) for the visual of the application.
![figma](https://raw.githubusercontent.com/ajaichemmanam/gsoft_dotnet_react/main/Screenshots/figma.png)

Note: All the images and fonts you will need to make the client part can be found in the compressed assets.zip

#### Loading Datas
Load product and transit data from provided XML or JSON files. These will always be syntactically valid and will respect the models defined in the technical requirements.

### Problem Statement in French


- Lire l'ensemble de l'énoncé avant de commencer.
- N'oubliez pas de "Commit" et "Push" votre code avant la rencontre

#### Énoncé

Une idée dans notre lab d'innovation a été soumise et nous avons besoins d'en faire une preuve de concept. Nous croyons qu'il serait possible d'optimiser la logistique de transport pour les entreprises de livraisons. Pour chaque produit, vous devez déterminer le transport optimal qui permettra de maximiser les profits liés à la vente des produits.

Vous serez évalué selon les critères suivants : Modélisation, Solution, Syntaxe, Méthodologie et Rétrospective.

#### Hypothèses

- Une seule livraison par produit peut être en transit à la fois.
- Tous les transports partent de l'usine et arrivent directement à la destination.
- Les coordonnées sont cartésiennes sont en format « (x,y) » et en KM.
- Tous les déplacements sont considérés « à vol d'oiseau » (ne pas tenir compte des routes).
- On considère que l'usine peut produire une quantité infinie de chaque produit.
- On considère que chaque produit est vendu une fois arrivé à destination.
- Vous n'avez pas à tenir compte du retour du transit
- Les produits périssables ne peuvent pas prendre le train ou le bateau.

#### Données

Les **produits** sont définis par les attributs suivants :

- Nom
- Emplacement de l'usine (point cartésien « (x,y) »)
- Emplacement de la destination (point cartésien « (x,y) »)
- Poids (en kg)
- Valeur (en $)
- Une valeur indiquant si un produit est périssable ou non.

Les **transits** sont définis par les attributs suivants :

- Type
- Capacité (en tonnes métriques)
- Coût ($ par tonne métrique)
- Vitesse (km/h)

L'application devra afficher le **transit idéal** pour chacun des produits, donc celui qui rapporte le plus de profit. Pour chaque transit idéal, nous voulons savoir la **quantité livrée annuellement** , **le coût annuel du transport** et le **pourcentage de profit**.

#### Architecture 
Une architecture client/serveur est requise. Les résultats de l’application doivent être visible sur une plateforme Web. Il n’y a pas de restriction de technologie. Il est recommandé de prendre le [React Template de .NET](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react). Une documentation pour lancer l’application devrait être fournie. Voici une [maquette](https://www.figma.com/file/XYRJIIYlpCJPyqJm9jSKOq/%5Bmaster%5D-Worksample-Developer?node-id=0%3A1) pour le visuel de l’application. 

Note: Toutes les images et polices dont vous aurez besoin pour faire la partie client se retrouvent dans le dossier compressé assets.zip

#### Lecture de fichiers
Chargez les données des produits et des transits à partir des fichiers XML ou JSON fournis. Ceux-ci seront toujours syntaxiquement valides et respecteront les modèles définis dans les requis techniques.
