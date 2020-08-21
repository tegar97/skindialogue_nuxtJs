<template>
    <section class="section-courier">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6 mb-4">
                    <img src="./../../assets/images/CouriersArrive.png" class="courier-image" alt="courir image">
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                        <p class="paragraph text-dark font-weight-bold">Jasa Pengiriman</p>
                        <div id="list-line" class="mt-3">
                            <span class="courier-logo jne-option"></span>
                            <span class="courier-logo jnt-option"></span>
                            <span class="courier-logo ninja-option"></span>
                            <span class="courier-logo pos-option"></span>
                            <span class="courier-logo sicepat-option"></span>
                            <span class="courier-logo paxel-option"></span>
                        </div>
                         <p class="paragraph text-dark mt-5 font-weight-bold">Pembayaran</p>
                        <div id="list-line " class="mt-3">
                            <span class="bank-logo jne-option"></span>
                            <span class="bank-logo jnt-option"></span>
                            <span class="bank-logo ninja-option"></span>
                            <span class="bank-logo pos-option"></span>
                            <span class="bank-logo sicepat-option"></span>
                            <span class="bank-logo paxel-option"></span>
                        </div>
                </div>
        </div>
        </div>
        
    </section>
</template>

.<style lang="scss" scoped>
.section-courier{
    padding: 7rem 0;
    background-color: #F7F7F7;

}
.courier-image{
    width: 100%;
}
#list-line{

    display: flex;
    flex-wrap: wrap;

}
.courier-logo{
    width: 72px;
    height: 36px;
    background-image: url('./../../assets/images/couriers.png');
    background-position: 0 9999px;
    background-repeat: no-repeat;
    background-size: 72px;
    display: inline-block;
    text-indent: -99999px;
}
.bank-logo{
    width: 72px;
    height: 36px;
    background-image: url('./../../assets/images/banks.png');
    background-position: 0 9999px;
    background-repeat: no-repeat;
    background-size: 72px;
    display: inline-block;
    text-indent: -99999px;
}
.jne-option {
    background-position: 0 0;
    background-position-x: 0px;
    background-position-y: 0px;
}
.jnt-option {
    background-position: 0 -288px;
   
}
.ninja-option {
    background-position: 0 -252px;
   
}
.pos-option {
    background-position: 0 -72px;
}
.sicepat-option {
    background-position: 0 -216px;
}
.paxel-option {
    background-position: 0 -576px;
}

</style>