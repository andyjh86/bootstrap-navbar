window.addEventListener('load', function() {
    if (typeof bootstrap === 'undefined') {
        var localBootstrap = document.createElement('link');
        localBootstrap.rel = 'stylesheet';
        localBootstrap.href = './css/bootstrap.min.css';
        document.head.appendChild(localBootstrap);
        console.warn('Bootstrap CDN failed. Loaded local Bootstrap.');
    }
});
