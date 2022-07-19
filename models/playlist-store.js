'use strict';

const _ = require('lodash');
const playlistStore = {

  playlistCollection: require('./playlist-store.json').playlistCollection,

  getAllPlaylists() {
    return this.playlistCollection;
  },

  getPlaylist(id) {
    let foundPlaylist = null;
    for (let playlist of this.playlistCollection) {
      if (id == playlist.id) {
        foundPlaylist = playlist;
      }
    }

    return foundPlaylist;
  },
  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    _.remove(playlist.songs, { id: songId });
  },
};

module.exports = playlistStore;