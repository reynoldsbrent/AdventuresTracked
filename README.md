# AdventuresTracked
AdventuresTracked is a trip tracking web app where users can view the trips that they have taken and various details about the trip. Currently, a user can see the amount of miles traveled that trip, the legs taken that trip with the miles traveled per leg, and any journals taken on the trip. A user can register to make an account and login to see personal trips. This web app was built using a .NET Web API backend, a React JS frontend, and a SQL Server database (there is also a SQLite version). It uses ASP.NET Core Identity and JWT for authentication and authorization.

View the project plan here for AdventuresTracked here: https://github.com/reynoldsbrent/AdventuresTracked/blob/main/AdventuresTrackedProjectPlan.pdf

## Features To Be Added
- Dynamically add photos to the trip cards using the Unsplash API
- A map that shows the trips a user has taken
- Photo gallery for each trip
- Ability to create a trip itinerary
- Forgot my password functionality
## How To Run The Web App
### Prerequisites
- Git installed
- Node.js and npm installed (for React frontend)
- .NET 8 SDK installed (for backend)
- SQL Server (for database) if you wish to use the SQL Server version of the project
- A code editor (e.g. Visual Studio Code for frontend, Visual Studio for backend)
### SQLite Version Setup (Suggested)
1. Clone the Repository
    - `git clone https://github.com/reynoldsbrent/AdventuresTracked.git`
    - `cd AdventuresTracked`
2. Switch to the SQLite Branch
    - `git checkout sqliteversion`
3. Navigate to the Backend API
    - `cd api/api`
4. Restore NuGet Packages
    - If you are in VS Code you can use `dotnet restore`
    - If you are using Visual Studio, the NuGet packages are automatically restored
5. Update the Database
    - If you are in VS Code you can use `dotnet ef database update`
    - If you are in Visual Studio you can use `Update-Database` in the Package Manager Console
6. Run the Backend
    - If you are in VS Code you can use `dotnet watch run`
    - If you are using Visual Studio you can use the green play button to start the API

The API should now be running.

7. Setup the Frontend
    - Change directories to the `frontend` folder
8. Install npm Packages
    - You can run `npm install` in VS Code
9. Start the React App
    - Run `npm start`

The frontend should now be running.

### Additional Notes
- The SQLite database file (AdventuresTracked.db) will be created in the api/api direcotry.
- The application uses a pre-seeded airports database. If you need to re-seed this data, you may need to delete the existing database file and run `dotnet ef database update` or `Update-Database` again.


## SQL Server Version (Main branch)
### Windows Setup
1. Clone the repository `git clone https://github.com/reynoldsbrent/AdventuresTracked.git`
2. Setup the frontend
    - Open the solution in VS Code and cd into the frontend folder
    - Run npm install to install the required packages
3. Setup the backend
    - Open the solution in Visual Studio
    - Update the connection string in the appsettings.json file
    - Run `Update-Database` in the Package Manager Console in Visual Studio or run `dotnet ef database update` if you are using VS Code
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
## How to Use the Web App
- You can click the Get Started button on the home page to bring you to the Signin page
- Signin or create a new user
- Add trips on the next page
- For each trip, you can click on the trip name which will take you to the trip details page
- Add any trip legs and journals that you wish!
- Click the Logout buton when you are done

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