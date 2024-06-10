document.getElementById('fname').addEventListener('keydown', function(event) {
            if (event.key === "Enter" && this.value !== "") {
                event.preventDefault();
                document.getElementById('emailfield').classList.remove('hidden');
                document.getElementById('email').focus();
            }
        });
        document.getElementById('email').addEventListener('keydown', function(event) {
            if (event.key === "Enter" && this.value !== "") {
                event.preventDefault();
                document.getElementById('carsfield').classList.remove('hidden');
                document.getElementById('cars').focus();
            }
        });
        document.getElementById('cars').addEventListener('keydown', function(event) {
            if (event.key === "Enter" && this.value !== "") {
                event.preventDefault();
                document.getElementById('passwordfield').classList.remove('hidden');
                document.getElementById('password').focus();
            }
        });
        document.getElementById('password').addEventListener('keydown', function(event) {
            if (event.key === "Enter" && this.value !== "") {
                event.preventDefault();
                document.getElementById('repasswordfield').classList.remove('hidden');
                document.getElementById('password').focus();
            }
        });
        document.getElementById('btn11').addEventListener('keydown', function(event) {
            if (event.key === "Enter" && this.value !== "") {
                event.preventDefault();
                document.getElementById('btnfield').classList.remove('hidden');
                document.getElementById('btn11').focus();
            }
        });

    
