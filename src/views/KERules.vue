<template>
  <div class="container">
    <h4 class="text-decoration-underline text-center">Kill Event Rules</h4>

    <p class="text-center">
      The following is the list of protected guilds.<br>
      The guilds listed below cannot be hit.</p>

    <div class="d-flex my-2">
      <label class="me-2 pt-1" for="guildSearch">Search:</label>
      <input type="text" class="flex-grow-1 form-control-sm"
             v-model="filter" id="guildSearch" />
    </div>
    <table class="table table-bordered table-hover table-striped text-center">
      <thead>
      <tr class="text-center">
        <th>Guild Tag</th>
        <th>Guild Name</th>
        <th>Relation</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(guild, i) in filteredGuilds" :key="i">
        <td v-text="guild.tag" />
        <td v-text="guild.name" />
        <td v-text="guild.relation" />
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const relation = {
  family: () => '4 Horsemen Family',
  academy: (parent) => `Academy${parent ? ` of ${parent}` : ''}`,
  ally: (parent) => `Ally of ${parent ?? 'the 4 Horsemen'}`,
  nap: (guild) => `NAP${guild ? ` with ${guild}` : ''}`,
}

export default {
  name: "KERules",
  data() {
    return {
      guilds: [ {
        tag: '4TNT',
        name: 'Tried n True',
        relation: relation.family(),
      }, {
        tag: '4ScL',
        name: 'The True Ones',
        relation: relation.family(),
      }, {
        tag: '4JuL',
        name: 'Justice League',
        relation: relation.family(),
      }, {
        tag: '4ATX',
        name: 'AET3RNUS',
        relation: relation.family(),
      }, {
        tag: '4tnt',
        name: '4TNT Academy',
        relation: relation.academy('4TNT'),
      }, {
        tag: 'ScL4',
        name: 'ScL Academy',
        relation: relation.academy('4ATX'),
      }, {
        tag: 'ATX2',
        name: 'AET3RNUS 2',
        relation: relation.academy('4ATX'),
      }, {
        tag: 'ATX3',
        name: 'AET3RNUS 2',
        relation: relation.academy('4ATX'),
      }, {
        tag: 'ATX4',
        name: 'AET3RNUS 2',
        relation: relation.academy('4ATX'),
      }, {
        tag: 'KoK-',
        name: 'Knights of Kusa',
        relation: relation.nap('4ScL'),
      }, {
        tag: 'KCPW',
        name: null,
        relation: relation.nap('4ScL')
      }, {
        tag: '4JL2',
        name: null,
        relation: relation.ally()
      }, {
        tag: 'Prit',
        name: null,
        relation: relation.nap('4ScL')
      }, {
        tag: '4JL1',
        name: null,
        relation: relation.academy('4JuL')
      }, {
        tag: '4JL4',
        name: null,
        relation: relation.academy('4JuL')
      }, {
        tag: '4JL6',
        name: null,
        relation: relation.academy('4JuL')
      }, {
        tag: 'Gem.',
        name: null,
        relation: relation.nap('4TNT'),
      }, {
        tag: 'TREA',
        name: null,
        relation: relation.nap('4TNT'),
      }, {
        tag: 'TFB6',
        name: null,
        relation: relation.nap('4TNT'),
      }, {
        tag: 'NSTH',
        name: null,
        relation: relation.nap('4TNT'),
      }, {
        tag: 'OOID',
        name: null,
        relation: relation.nap('4TNT'),
      } ],
      filter: ''
    }
  },


  computed: {
    filteredGuilds() {
      return this.filter
          ? this.guilds.filter((guild) => `${guild.tag} ${guild.name}`.toLowerCase().includes(this.filter.toLowerCase()))
          : this.guilds
    }
  }
}
</script>

<style lang="scss" scoped>

</style>