window.onSpotifyWebPlaybackSDKReady = () => {
const token = 'BQAFGL72dofD7S6Vz8VgqZsVpQad06Klyoylz8STo4N0UoSg0y4fJTT35bFxoAII29RFLY2lTMChnC9f92o1gW5rAQ5MrpZLAvIyR5dNdBbZzEaZfzkHgaiuthbGJCjkEikApeenaL632sSRVO1YlRCHy5-ifPpvXP0We6bAnN0XDJA9M99mWKk';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume:1
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  };