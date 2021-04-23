<template>
  <h4 class="text-decoration-underline text-center">March Speed</h4>

  <p>To see your current march speed, go in HQ stats in the combat section (note: these stats does not include the buff given by your officers talents).</p>

  <p>The following are all the ways you can improve your march speed. Let me know if I'm missing anything.</p>

  <dl>
    <dt>Appointment</dt>
    <dd>In appointments building, the Army Ambassador appointment (the last one) gives you a march speed boost. Assigning a 5 hearth legendary/gold officer to it increases your march speed by 27%.</dd>

    <dt>Single type of troops per march</dt>
    <dd>Use only 1 type of troops per march (e.g. only tanks or only anti-tanks or only infantry units...) and use officers for this type of troop (e.g. Katherine for a march of tanks, Jessica for a march of anti-tanks....)</dd>

    <dt>Tier of troop</dt>
    <dd>The higher the tier is the slower the troops are. (T1: very fast, T2: fast, T3: normal, T4: slow, T5: very slow).</dd>

    <dt>Type of troop</dt>
    <dd>Infantry is the fastest type of troop. Tank are a little slower but not much. Artillery are the slowest troops.</dd>

    <dt>Officer Talents</dt>
    <dd>Some officers have talents that improve the march speed. Katherine has a tank talent that when maxed out gives a 20% march speed for tanks. Angelica has a mobility talent tree.</dd>

    <dt>Cities</dt>
    <dd>There are cities which which increases the march speed. For example, Abbeville (153, 509) increases the march speed by 7%. (See the <a href="https://kow-map.onrender.com/">interactive map</a> to find which cities give this type of boost)</dd>

    <dt>Research</dt>
    <dd>
      There is 2 march speed tech you can research. Both of them give the following boosts:
      <ul>
        <li>Level 1  ─▸ +1%</li>
        <li>Level 2 ─▸ +3%</li>
        <li>Level 3 ─▸ +6%</li>
        <li>Level 4 ─▸ +10%</li>
        <li>Level 5 ─▸ +15%</li>
      </ul>
    </dd>

    <dt>Warship</dt>
    <dd>The march speed can be improve in the warship modifications.</dd>

    <dt>Weapons</dt>
    <dd>Some weapons can have march speed attributes.</dd>
  </dl>
</template>

<script>
export default {
  name: "MarchSpeed"
}
</script>

<style lang="scss" scoped>
dt {
  text-decoration: underline;
  font-weight: normal;
}
</style>