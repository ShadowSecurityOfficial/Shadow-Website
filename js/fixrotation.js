<script type="text/javascript"> // RELOADS WEBPAGE WHEN MOBILE ORIENTATION CHANGES  
    window.onorientationchange = function() { 
        var orientation = window.orientation; 
            switch(orientation) { 
                case 0:
                case 90:
                case -90: window.location.reload(); 
                break; } 
    };