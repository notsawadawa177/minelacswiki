<template>
  <div>
    <p v-for="player in playersData" :key="player.uuid">
      - {{ player.name }} <img :src="`https://api.mineatar.io/face/${player.uuid}?scale=4&default=MHF_Steve&overlay`" 
                                alt="Avatar" 
                                style="display: inline; margin: 0 10px; vertical-align: middle;" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      playersData: []
    };
  },
  async created() {
    this.playersData = await Promise.all(this.players.map(async (username) => {
      const uuid = await this.getPlayerUUID(username);
      return {
        uuid: uuid,
        name: username
      };
    }));
  },
  methods: {
    async getPlayerUUID(username) {
      const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
      if (response.ok) {
        const data = await response.json();
        return data.id;
      } else {
        console.error('Player not found:', username);
        return null;
      }
    }
  }
};
</script>
