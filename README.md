# react-mvc-visual-studio-2017
A starter project for Visual Studio 2017 with ASP.NET MVC and react
Uses vs 2017 release 15.3
Uses React 16 rc 2 !

# Install nodejs on your machine , I used latest stable
# Install git on your machine, you'll need it to clone the git repository

# clone the repository
<code>git clone https://github.com/swaggerloaf/react-mvc-visual-studio-2017.git</code>
<code>npm i -g webpack</code> on your machine
<code>npm i -g typescript</code> as well
It doesn't hurt to have these installed globally on the machine

# restore nuget packages for the project
# npm should download needed nodejs packages automatically, so monitor that

cd into project directory ReactParkDemo

# run <code>webpack</code> on command line , this should build the react bundle for the app and place in Scripts/dist directory

# start up project with F5 , should start web browser and display message from react component

You can make changes to react code, run <code>webpack</code> at the command line in project level directory to rebuild react bundle
