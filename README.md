# AdventuresTracked
AdventuresTracked is a trip tracking web app where users can view the trips that they have taken and various details about the trip. Currently, a user can see the amount of miles traveled that trip, the legs taken that trip with the miles traveled per leg, and any journals taken on the trip. A user can register to make an account and login to see personal trips. This web app was built using a .NET Web API backend, a React JS frontend, and a SQL Server database. It uses ASP.NET Core Identity and JWT for authentication. 

View the project plan here for AdventuresTracked here: https://github.com/reynoldsbrent/AdventuresTracked/blob/main/AdventuresTrackedProjectPlan.pdf

## Features To Be Added
- Dynamically add photos to the trip cards using the Unsplash API
- A map that shows the trips a user has taken
- Photo gallery for each trip
## How To Run The Web App
### Prerequisites:
- Git installed
- Node.js and npm installed (for React frontend)
- .NET SDK installed (for backend)
- SQL Server (for database)
- A code editor (e.g. Visual Studio Code for frontend, Visual Studio for backend)
### Windows Setup
1. Clone the repository [git clone repository-url]
2. Setup the frontend
    - Open the solution in VS Code and cd into the frontend folder
    - Run npm install to install the required packages
3. Setup the backend
    - Open the solution in Visual Studio
    - Update the connection string in the appsettings.json file
    - Run `Update Database` in the Package Manager Console in Visual Studio or run `dotnet ef database update` if you are using VS Code
4. Setup the Database
    - Open SQL Server Management Studio
    - Open a New Query window connected to the database specified in the connection string
    - Preload the Airports table with the airports.csv file provided
    - To preload the data you can use a bulk insert command such as this:
```sql
BULK INSERT Airports
FROM 'C:\\path\\to\\your\\file.csv'
WITH
(
    FIELDTERMINATOR = ',',  
    ROWTERMINATOR = '\r\n',
    FIRSTROW = 1,
);
```
5. Run the Application
    - Start the backend from Visual Studio using the green start button
    - Start the frontend by running `npm start` in the frontend directory in VS Code
    - You should be able to create a user using the Register page, then login using your username and password.
    - Add any trips and trip details that you want.


![Home Page](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/HomePage.png?raw=true)

![Register Page](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/RegisterPage.png?raw=true)

![Signin Page](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/SigninPage.png?raw=true)


![Trip List](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/YourTrips.png?raw=true)

![Add Trip](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/AddNewTrip.png?raw=true)

![Edit Trip](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/EditTrip.png?raw=true)

![Trip Legs](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/TripLegs.png?raw=true)

![Add Leg](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/AddLeg.png?raw=true)

![Edit Leg](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/EditLeg.png?raw=true)

![Trip Journals](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/TripJournals.png?raw=true)

![Add Journal](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/AddJournal.png?raw=true)

![Edit Journal](https://github.com/reynoldsbrent/AdventuresTracked/blob/main/Photos/EditJournal.png?raw=true)