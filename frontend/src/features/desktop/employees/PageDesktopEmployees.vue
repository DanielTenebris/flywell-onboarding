<template>

  <div class="_dp" id="employeeComponent">
    <h1>Сотрудники</h1>

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

    <div class="body">
      <div class="block">
        <div class="content">
          <div class="line">
            <div class="title">
              Статистика
            </div>
            <div class="str">
              <div class="purple">
                За месяц
              </div>
              <div class="grey">
                За неделю
              </div>
            </div>
          </div>
          <div class="statistic">
            <img class="st" :src='require("@/features/desktop/employees/st1.svg")'/>
            <img class="st" :src='require("@/features/desktop/employees/st2.svg")'/>
            <img class="st" :src='require("@/features/desktop/employees/st3.svg")'/>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="content">
          <div class="line">
            <div class="title">
              Сотрудники
            </div>
            <div class="button">
              Добавить сотрудника
            </div>

          </div>
          <div class="head">

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

#employeeComponent {

  .poiskovik {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 106px;
    background-color: $white_color;
    padding-left: 27px;
    border-bottom-style: solid;
    border-bottom-color: rgba(157, 165, 167, 0.45);
    border-bottom-width: 1px;

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
      flex-direction: row;
      align-items: center;

      .photo {
        height: 60px;
        width: 60px;
        padding-right: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;

        .men {
          color: $black;
          font-size: 18px;
          font-weight: 700;
        }

        .lin {
          color: $black;
          opacity: 0.4;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }

  .body {
    background-color: $light_grey;
    padding: 15px;
    flex-direction: row;

    .statistic {
      display: grid;
      row-gap: 20px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      padding-bottom: 70px;
      padding-top: 22px;

      .st {
        width: 290px;
      }
    }

    .block {
      background-color: $white_color;
      border-radius: 20px;
      margin-bottom: 10px;
      margin-right: 15px;


      .content {
        padding: 40px 32px;

        .line {
          display: flex;
          align-items: center;

          .title {
            flex: 4;
            color: $black;

            font-size: 24px;
            font-weight: 600;
          }

          .str {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex: 1;
            font-size: 16px;
            font-weight: 600;

            .purple {
              color: $color-purple;
              margin-right: 20px;
              border-bottom: 1px solid $color-purple;
            }

            .grey {
              color: $color-grey;
            }
          }
        }


      }
    }


    .employee {

    }
  }

}
</style>
