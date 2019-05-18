<!DOCTYPE html>
<html>
    <head>
        <title>Test Angular + PHP</title>
        <base href="/">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
    <app-root></app-root>

        <script type="text/javascript" src="{{ asset('build/polyfills.js') }}?time={{ time() }}"></script>
        <script type="text/javascript" src="{{ asset('build/runtime.js') }}?time={{ time() }}"></script>
        <script type="text/javascript" src="{{ asset('build/es2015-polyfills.js') }}?time={{ time() }}" nomodule></script>
        <script type="text/javascript" src="{{ asset('build/vendor.js') }}?time={{ time() }}"></script>
        <script type="text/javascript" src="{{ asset('build/styles.js') }}?time={{ time() }}"></script>
        <script type="text/javascript" src="{{ asset('build/main.js') }}?time={{ time() }}"></script>
    </body>
</html>
