# Laravel React Typescript Boilerplate

An opinionated boilerplate based on Laravel 5.6, React 16 and Typescript empowering you to get off the ground quickly without excessive fiddling with npm, webpack, laravel configuration files. Do you need everything listed below? Likely not. You probably don't need a couple of items included list below. However, I've always found that it is a lot easier removing things or not using things than adding and configuring them to work with everything else (especially specific webpack versions). 

## Included:
* Laravel 5.6
* React 16.*
* Hot Module Reloading (npm run dev)
* [Typescript](https://www.typescriptlang.org/)
* [Webpack 4](https://webpack.js.org/concepts/)
* [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy)
* [Mobx & Mobx React](https://github.com/mobxjs/mobx-react)
* [Axios](https://github.com/axios/axios)
* [Lodash](https://lodash.com/docs/4.17.10)
* [PostCSS](https://github.com/postcss/postcss)
* [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/)
* [Ant Design](https://ant.design/docs/react/introduce)
* [FontAwesome 5](http://fontawesome.io/icons/)
* [Laravel CRUD Generator](https://github.com/appzcoder/crud-generator)
* [Emotion CSS-in-JS Library](https://emotion.sh/docs/introduction)
* [Log Viewer - viewable at /log-viewer (protected by admin middleware)](https://github.com/ARCANEDEV/LogViewer)
* Admin Middleware (See Below)

![](https://i.imgur.com/lgkhnc2.jpg)

## Notes:
#### Admin Middleware

In config/auth.php add the emails of 'Admins' to the admins array.
This allows you to easily restrict access to certain routes whereby the user's email is not in the admins array using the admin middleware.
```
Route::get('admin/profile', function () {
    //
})->middleware('admin');
```

The admin middleware file is located at:
```
App\Http\Middleware\Admin
```

#### Frontend Files
Frontend files are placed in /frontend rather than:

/resources/assets/js, and
/resources/assets/sass

I think this makes more sense when your application is more frontend/javascript heavy than mere jquery sprinkled over blade views.

## Scripts
#### Hot Module Reloading and Development:
``` npm run dev ```

#### Production Development:
``` npm run production ```
To use your built files you must set your Larave APP_ENV to production.

## Work in Progress
If you fix these, submitting a PR or Issue with the code would be appreciated.
* Purge CSS or UnCSS integration, I have made a start on Purge CSS.
    * This must take into account Ant Design which is imported via .babelrc.

## Credits
To all the contributors to the software used.

[My personal Twitter](https://twitter.com/grmcameron). 

Feel free to tweet me with suggestions.

## License
#### MIT License:
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
