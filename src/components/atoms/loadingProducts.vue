<template>
    <div class="loading-bar-spinner spinner">
        <div class="loading-spinner-icon"></div>
    </div>
</template>

<style scoped lang='scss'>
    .loading-bar-spinner.spinner {
        left: 50%;
        margin-left: -20px;
        top: 50%;
        margin-top: -20px;
        position: absolute;
        z-index: 19 !important;
        animation: loading-bar-spinner 700ms linear infinite;
    }

    .loading-bar-spinner.spinner .loading-spinner-icon {
        width: 40px;
        height: 40px;
        border:  solid 4px transparent;
        border-top-color:  rgb(48, 64, 85) !important;
        border-left-color: rgb(48, 64, 85) !important;
        border-radius: 50%;
    }

    @keyframes loading-bar-spinner {
    0%   { transform: rotate(0deg);   transform: rotate(0deg); }
    100% { transform: rotate(360deg); transform: rotate(360deg); }
    }
</style>