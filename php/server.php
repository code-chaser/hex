<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
$file = $_FILES['file'];
if ($file['error'] === UPLOAD_ERR_OK) move_uploaded_file($file['tmp_name'], 'record.log');
}
?>
