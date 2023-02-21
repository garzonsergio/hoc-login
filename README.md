# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Proyecto: Componente de Autenticación de Usuario

Crea un componente de autenticación de usuario utilizando HOC. Este componente debe permitir la autenticación de los usuarios en la aplicación, y debe ser fácilmente reutilizable en cualquier parte de la aplicación que requiera autenticación.

# Pasos sugeridos:

    1. Crea un HOC que envuelva el componente que requiere autenticación. Este HOC debe verificar si el usuario está autenticado o no.

    2. Si el usuario no está autenticado, el HOC debe redirigir al usuario a una página de inicio de sesión.

    3. Si el usuario está autenticado, el HOC debe renderizar el componente original.

    4. Para la autenticación, puedes utilizar una función que verifique si el usuario tiene una sesión activa en el servidor. 5 .Si el usuario no tiene una sesión activa, debes redirigir al usuario a la página de inicio de sesión.

    Para la página de inicio de sesión, puedes crear otro componente que permita al usuario ingresar sus credenciales. Después de que el usuario se haya autenticado, puedes establecer una sesión activa en el servidor y redirigir al usuario a la página original que solicitó.

Con este proyecto, podrás aprender cómo utilizar HOC en React y cómo crear componentes reutilizables que pueden proporcionar una funcionalidad importante, como la autenticación de usuarios. Además, también podrás aprender cómo implementar la autenticación de usuarios en tu aplicación web.