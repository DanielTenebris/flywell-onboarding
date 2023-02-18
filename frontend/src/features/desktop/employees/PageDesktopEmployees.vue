<template>
  <div id="employeeComponent">
    <div class="poiskovik">
      <input class="input" placeholder="Поиск" type="search"/>
      <div class="hr_info">
        <div class="photo">
          <img :src='require("@/features/desktop/employees/ByeWind.svg")'/>
        </div>
        <div class="info">
          <div class="men">
              HR менеджер
          </div>
          <div class="lin">
            veronika_pet
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

$white_color: #FFFFFF;
$light_grey: #F1F1F1;
$black: #202020;
#employeeComponent {
  .poiskovik {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 106px;
    background-color: $white_color;
    padding-left: 27px;

    .input {
      flex: 2;

      background-color: $light_grey;
      font-size: 15px;
      padding: 15px 20px;
      border: none;
      outline: none;
      border-radius: 10px;
      margin-right: 47px;
    }

    .hr_info {
      flex: 1;
      display: flex;
      flex-direction:row;
      align-items: center;
      .photo {
        height: 60px;
        width: 60px;
        padding-right: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;
        .men{
          color: $black;
          font-size: 18px;
          font-weight: 700;
        }
        .lin{
          color: $black;
          opacity: 0.4;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }



}
</style>
