# youtube-clone-nxtWatch

nxtWatch is a video streaming platform.

The whole platform is divided into:-
* Login
* Home
* Trending
* Gaming
* SavedVideos
* VideoDetails route

---
* This application has Dark/light theme.
* Every HTTP request is authorized by, including jwtToken in headers of every request.
* If the HTTP GET request made is unsuccessful, then the Failure view will be displayed
When the Retry button is clicked, an HTTP GET request wwill be made again.
* SideBar present in each section is used for navigating between routes.

### Login section
**Features**
1. When an unauthenticated user, tries to access the Home route, Trending route, Gaming route, SavedVideos route, VideoDetails route, then the page will be navigated to Login route.
2. When an authenticated user tries to access the Login route, then the page will be navigated to the Home route.

**Funtionality**
1. When a invalid username and password are provided and the Login button is clicked, then the respective error message received from the response of login API will be displayed.
2. When a valid username and password are provided and the Login button is clicked, then the page will be navigated to the Home route.
    1. Upon successful login, a **jwtToken** will be created and will be stored in cookies.   
    2. When LogOut button is clicked in Home section, this jwtToken will be removed and page will be navigated to Login section.

---
### Home and Trending section
1. When an authenticated user opens the Home or Trending Route,
    1. An HTTP GET request will be made to videosApiUrl.
    2. Loader will be displayed while data is being fetched.
    3. After successfully fetching, list of videos will be displayed. 
