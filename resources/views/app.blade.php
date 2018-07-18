<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Lato" rel="stylesheet" />
    @env('production')
        <script src="/dist/styles.css"></script>
    @endenv
</head>

<body>
    @if (Route::has('login')) @auth
    <a href="{{ url('/home') }}">Home</a> @else
    <a href="{{ route('login') }}">Login</a>
    <a href="{{ route('register') }}">Register</a> @endauth @endif

    <div id="app"></div>
    
    @env('production')
    <script src="/dist/bundle.js"></script>
    @else
    <script src="https://localhost:3333/bundle.js"></script>
    @endenv
   
</body>

</html>