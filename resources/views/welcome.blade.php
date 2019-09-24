<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

        <title>Laravel</title>

        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <script src="{{ url('https://kit.fontawesome.com/61752da894.js') }}"></script>
        <style>
          .pagination .page-item.disabled {
            cursor: not-allowed;
          }
        </style>
    </head>
    <body>
        <div id="root"></div>

        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
