<head>
    <meta charset="utf-8">
    <!-- Utilisation de tout l'espace disponible pour les mobiles, sans zoom -->
    <meta name="Informatique,santé,diagnostic,problèmes,solutions,Watson,télémedecine,désertification" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Index page personnel</title>
    <!-- déclaration du fichier CSS de Bootstrap -->
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/starter-template/">

    <!-- Bootstrap core CSS -->
    <link href="../Bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/ popper.min.js"></script>
    <script src="../Bootstrap/js/bootstrap.min.js"></script>
    <style type="text/css">
        .label{
            text-align: center;
            font-family: 'Raleway', sans-serif;
        }
    </style>


</head>

<body>
   <section class="col-3">
      <?php $sp=htmlentities($_POST['Pseudo']);
                $na=htmlentities($_POST['Name']);
                $ma=htmlentities($_POST['Mail']);
                $su=htmlentities($_POST['Sujet']);
                $me=htmlentities($_POST['Message']);
                mail("melvin.mathurin35@gmail.com","$su","De : $sp/n/n$na/n/n$ma/n/n$su/n/n$me","");?>
       <div class="label"><b>Votre message a été correctement envoyer</b></div><br/>
       <button onclick="self.location.href='index.html'" style="width:100px;height:50px;display:block;margin:auto;" class="retourAcceuil">Retour à l'acceuil</button>
    </section>
</body>
