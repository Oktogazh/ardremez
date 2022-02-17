<template>
  <div class="footer-container">
    <div class="legal-mentions identity">
      <span>Savet gant mikro-embregerezh <br> Alan Kersaudy</span><br>
      <span>SIREN 892315235</span><br>
    </div>
    <div class="legal-mentions address">
      <span>emgav@eienn.bzh</span><br>
      <span>16 al. Kerlien, 29100 Douarnenez</span><br>
      <span>N. SIRET: 892 315 235 00010</span><br>
    </div>
    <div class="legal-mentions host">
      <span>Annezet gant Digital Ocean, LLC</span><br>
      <span>101 Avenue of the Americas 10th Floor <br>New York, NY 10013 United States</span><br>
      <span>1-347-903-7918</span><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegalFooter',
};
</script>

<style scoped>
.footer-container {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  background-color: rgb(9, 67, 135, .6);
  bottom: 0;
  font-size: .8em;
}

.legal-mentions{
  margin: 1em;
}
</style>
