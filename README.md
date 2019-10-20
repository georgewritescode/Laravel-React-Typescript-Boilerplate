# Laravel React Typescript Boilerplate

An opinionated boilerplate based on Laravel 6.*, React 16 and Typescript empowering you to get off the ground quickly without spending time on configuration. 

## Included:
* Laravel 6.*
* React 16
* Hot Module Reloading (npm run dev)
* Admin Middleware (See Below)
* [Typescript](https://www.typescriptlang.org/)
* [Webpack 4](https://webpack.js.org/concepts/)
* [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy)
* [Axios](https://github.com/axios/axios)
* [Lodash (lodash-es)](https://lodash.com/docs/4.17.10)
* [PostCSS](https://github.com/postcss/postcss)
* [PurgeCSS](https://github.com/FullHuman/purgecss)
* [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/)
* [Tailwind Forms Plugin](https://tailwindcss-custom-forms.netlify.com/)
* [Ant Design](https://ant.design/docs/react/introduce)
* [FontAwesome 5](http://fontawesome.io/icons/)
* [Emotion CSS-in-JS Library](https://emotion.sh/docs/introduction)
* [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* [Log Viewer - /log-viewer (Protected by admin middleware)](https://github.com/ARCANEDEV/LogViewer)
* [Laravel Telescope](https://laravel.com/docs/5.8/telescope)


![](https://i.imgur.com/YdAk3NK.jpg)

## Documentation

#### Frontend Files
Frontend JS & CSS files are placed in ``` /frontend ```.

#### Hot Module Reloading and Development:
First, allow insecure certs from localhost (for development).
In Chrome, go to this url and Enable Insecure Certs from Localhost:

``` chrome://flags/#allow-insecure-localhost ```

Run HMR:

``` npm run dev ```

#### Production Development:
``` npm run production ```

To use production built files, set Laravel APP_ENV to production.
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

## Contact
[George's Twitter](https://twitter.com/grmcameron)

## License
#### MIT License:
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
