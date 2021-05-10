<template>
    <Layout>

        <MySection style="height:92vh">
            <Wrapper class="hero flex flex-row items-center">
                <div class="w-1/2">
                    <g-image class="-ml-10" src="~/images/house.png" width="300"/>
                    <div class="inline-block border-b-2 border-red-300 mb-3">
                        <h2 style="font-family:Vollkorn SC" class="text-3xl">Berenice Villas & Winery</h2>
                    </div>
                    <h3 style="font-family:Work Sans" class="mb-3 text-1xl">TIBERIAS, ISRAEL</h3>
                    <h4 class="text-md">Berenice Winery is a luxurious villa & boutique winery located A few minutes away from the sea of Galilee in the city of Tiberias. On the property you will find the winery, accommodation, an enchanting garden & a chillout pool. We offer 4 various-sized rooms and accommodations for couples or groups of up to 16 people. We also welcome groups and companies to host their events with us, and to enjoy our boutique wine.</h4>
                </div>
            </Wrapper>
        </MySection>
        <section style="background:red;height:92vh">
        </section>
      
    </Layout>
</template>

<script>



export default {
  metaInfo: {
    title: 'Home'
  },
  components:{

  }
}
</script>

<style scoped>
.hero{
    background-image: url('~@/images/mybottles.jpg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 100% 20%;
}
</style>