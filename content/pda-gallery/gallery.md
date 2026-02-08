---
widget: pages
headless: false  # This file represents a page section.

# ... Put Your Section Options Here (title etc.) ...
title: Particle Diffusion Art Gallery
subtitle: 'where diffusing particles serve as a medium'

# Position of this section on the page
weight: 1

content:
  # Filter content to display
  filters:
    # The folders to display content from
    folders:
      - pda
    tag: ''
    category: ''
    publication_type: ''
    author: ''
    exclude_featured: false
    exclude_future: false
    exclude_past: false
  # Choose how many pages you would like to display (0 = all pages)
  count: 0
  # Choose how many pages you would like to offset by
  # Useful if you wish to show the first item in the Featured widget
  offset: 0
  # Field to sort by, such as Date or Title
  sort_by: 'Date'
  sort_ascending: false
design:
  # Choose a listing view
  view: community/gif-showcase
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '1'
---
<style>
  .music-player {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .playlist {
    list-style: none;
    padding: 0;
    margin: 15px 0;
  }
  .playlist li {
    padding: 10px;
    margin: 5px 0;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .playlist li:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .playlist li.active {
    background: rgba(100, 150, 255, 0.2);
    border-left: 3px solid #6496ff;
  }
  .now-playing {
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 16px;
  }
</style>

<div class="music-player">
  <div class="now-playing" id="nowPlaying">Now Playing: No Answer</div>
  <audio id="audioPlayer" autoplay controls controlsList="nodownload" style="width: 100%;">
    <source src="No answer mastered.m4a" type="audio/mp4">
  </audio>
  <ul class="playlist">
    <li onclick="changeSong('No answer mastered.m4a', 'No Answer', 0)" class="active" id="song0">No Answer</li>
    <li onclick="changeSong('Pure_Imagination.mp3', 'Pure Imagination (Holly Henry)', 1)" id="song1">Pure Imagination (Holly Henry)</li>
  </ul>
</div>

<script>
  function changeSong(filename, title, index) {
    const player = document.getElementById('audioPlayer');
    const nowPlaying = document.getElementById('nowPlaying');
    const source = player.querySelector('source');

    // Update source
    source.src = filename;
    player.load();
    player.play();

    // Update now playing text
    nowPlaying.textContent = 'Now Playing: ' + title;

    // Update active state
    document.querySelectorAll('.playlist li').forEach(li => li.classList.remove('active'));
    document.getElementById('song' + index).classList.add('active');
  }

  // Auto-play next song when current ends
  document.getElementById('audioPlayer').addEventListener('ended', function() {
    const activeSong = document.querySelector('.playlist li.active');
    const nextSong = activeSong.nextElementSibling;
    if (nextSong) {
      nextSong.click();
    } else {
      // Loop back to first song
      document.getElementById('song0').click();
    }
  });
</script>

{{< typography font="Lato:wght@100" size="0px">}}
{{< /typography >}}
{{< typography font="Lato" size="26px" weight="100">}}
[Project idea: What if you could generate animations such as this using natural language? We may be able to use ChatGPT's (and Whisper's) API to collect details about a scene and generate the output with diffusing particles.]

<br>
The animations shown below were created to commemorate previous projects and achievements that are dear to me. Using the stochastic lattice model implemented by kinetic Monte Carlo, one can synthesize the following collection of pieces. [Music credit: <a href="https://www.youtube.com/watch?v=2zl0l1nttD8">Willy Wonka & The Chocolate Factory (Covered by Holly Henry)]</a>
{{< /typography >}}
<br><br>
