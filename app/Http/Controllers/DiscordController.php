<?php

namespace App\Http\Controllers;

class DiscordController extends Controller

{

use Discord\Discord;

  public function startBot(){
      $discord = new Discord([
    	'token' => 'ODg1MzI0MzU2NDU5MzA3MDYw.YTlYjw.zLql9gE_RHIBplCJpozuPqqIl0A',
		]);

	$discord->on('ready', function ($discord) {
    	echo "Bot is ready!", PHP_EOL;

    // Listen for messages.
    $discord->on('message', function ($message, $discord) {
        echo "{$message->author->username}: {$message->content}",PHP_EOL;
    	});
	});

	$discord->run();
  }
?>