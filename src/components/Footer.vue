<template>
    <div class="footer">
        <div class="footer-backToTop">
           <button class="footer-backToTop-button" @click="scrollToTop">Back to top</button>
        </div>
            <div class="footer-content">
                <div class="footer-content-section">
                    <div class="footer-content-section-title">
                        Get to Know Us
                    </div>
                    <ul class="footer-content-section-list">
                        <li class="footer-content-section-link">
                            Careers
                        </li>
                        <li class="footer-content-section-link">
                            Blog
                        </li>
                        <li class="footer-content-section-link">
                            About SuperStore
                        </li>
                        <li class="footer-content-section-link">
                            Investor Relations
                        </li>
                        <li class="footer-content-section-link">
                            SuperStore Science
                        </li>
                    </ul>
                </div>
                <div class="footer-content-section">
                    <div class="footer-content-section-title">
                        Make Money with Us
                    </div>
                    <ul class="footer-content-section-list">
                        <li class="footer-content-section-link">
                            Sell products on SuperStore
                        </li>
                        <li class="footer-content-section-link">
                            Sell on SuperStore Business
                        </li>
                        <li class="footer-content-section-link">
                            Sell apps on SuperStore
                        </li>
                        <li class="footer-content-section-link">
                            Become an Affiliate
                        </li>
                        <li class="footer-content-section-link">
                            Advertise Your Products
                        </li>
                        <li class="footer-content-section-link">
                            Self-Publish with Us
                        </li>
                        <li class="footer-content-section-link">
                            Host an SuperStore Hub
                        </li>
                    
                    </ul>
                </div>
                <div class="footer-content-section">
                    <div class="footer-content-section-title">
                        SuperStore Payment Products
                    </div>
                    <ul class="footer-content-section-list">
                        <li class="footer-content-section-link">
                            SuperStore Business Card
                        </li>
                        <li class="footer-content-section-link">
                            Shop with Points
                        </li>
                        <li class="footer-content-section-link">
                            Reload Your Balance
                        </li>
                        <li class="footer-content-section-link">
                            SuperStore Currency Converter
                        </li>
                    </ul>
                </div>

                <div class="footer-content-section">
                    <div class="footer-content-section-title">
                        Let Us Help You
                    </div>
                    <ul class="footer-content-section-list">
                        <li class="footer-content-section-link">
                            SuperStore and COVID-19
                        </li>
                        <li class="footer-content-section-link">
                            Your Orders
                        </li>
                        <li class="footer-content-section-link">
                            Returns & Replacements
                        </li>
                        <li class="footer-content-section-link">
                            SuperStore Assistant
                        </li>
                        <li class="footer-content-section-link">
                            Help
                        </li>
                    </ul>
                </div>
            </div>

            <!-- <div class="footer-logo">
                <img src="../assets/store_logo.png" alt="logo super store" class="footer-logo-img">
            </div> -->
            <div class="footer-copyright">
                © 2022-2023, superStore.com, Inc. or its affiliates
            </div>
    </div>   
</template>

<script>
export default {
    setup() {

        const scrollToTop = () => {
              window.scrollTo(0, 0)
        }

        return {scrollToTop}
    },
    
}
</script>

<style lang="scss">
    .footer {
        background-color: rgb(18, 25, 33);
        z-index: 10;
        padding-bottom: 20px;
        height: auto;
        width:  100%;
        margin-top: 50px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .footer-backToTop {
        margin-top: 0;
        padding: 10px 0;
        background-color: rgb(48, 64, 85);
        width: 100%;
    }

    .footer-backToTop-button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 15px;
    }

    .footer-content {
        width: 75%;
        padding: 50px 0;
        display: flex;
        justify-content: space-around;
        justify-items: center;
    }

    .footer-content-section-title {
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 20px;
        max-width: 200px;
        text-align: start;
    }

    .footer-content-section-list{
        list-style-type: none;
        padding: 0;
        gap: 12px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 12px;
        cursor: pointer;
    }

    .footer-content-section-link:hover{
        text-decoration: underline;
    }
    
    .footer-logo {
        width: 100%;

        &-img {
        width: 250px;
        margin-top: 50px;
        padding-bottom: 50px;
        }
    }

    .footer-copyright{
        width: 100%;
        font-size: 15px;
    }

</style>