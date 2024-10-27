<?php
  $host="localhost";
  $username="root";
  $password="";
  $databasename="FiraData";
   try{
   $conn=new mysqli($host,$username,$password,$databasename);
   echo "connected";
   }
  catch(Exception $e){
   die("DB Connect Unsuccessfully".$e);
  }
?>
<?php
       if(isset($_POST['btn-submit'])){
        $fistName=$_POST['firstName'];
        $lastName=$_POST['lastName'];
        $mobile=$_POST['mobile'];
        $email=$_POST['email'];
        $textArea=$_POST['textArea'];
               $sql3="insert into firas (firstName,lastName,mobile,email,textArea) values ('$fistName','$lastName','$mobile','$email','$textArea');";
               if(true===$conn->query($sql3)){
               echo "<script>
               alert('Thanks for Information');
               window.location.replace('./HTML/index.html');
               </script>";
                
              }
              else{
                echo "<script>
               alert('Please try again later!!!');
               window.location.replace('./HTML/index.html');
               </script>";
              }
        }
       ?>