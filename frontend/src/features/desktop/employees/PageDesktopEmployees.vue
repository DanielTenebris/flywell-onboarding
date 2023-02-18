<template>

  <div class="_dp" id="employeeComponent">
    <h1>Статистика</h1>

    <div class="body">
      <!--      <div class="block">-->
      <div class="content">
        <div class="line">
          <div></div>
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
      <!--      </div>-->
      <!--      <div class="block">-->
      <div class="content">
        <div class="line">
          <div class="title">
            Сотрудники
          </div>
          <div style="flex:1">

          </div>
          <div class="button">
            <div>
              Добавить сотрудника
            </div>
          </div>

        </div>
        <div class="head">
          <div style="flex:3">Имя сотрудника</div>
          <div style="flex:1">Отдел</div>
          <div style="flex:2">Этапов пройдено</div>
          <div style="flex:2">Статус</div>
          <div style="flex:1">Социальные сети</div>
        </div>

        <div class="empls">
          <div class="empl" v-for="empl in employees">
            <div class="icon">

            </div>
            <div class="info">
              <div class="name">
                {{ empl.name }}
                <div class="online"></div>
              </div>
              <div class="position">
                {{ empl.position }}
              </div>
            </div>
            <div class="otdel">
              {{ empl.department }}
            </div>

            <div class="step">
              <p>{{ empl.step }}</p>
            </div>

            <div class="status">
              <div class="sts">
                {{ empl.status }}
              </div>
            </div>
            <div class="links">
              <img class="st" :src='require("@/features/desktop/employees/social1.svg")'/>
              <img class="st" :src='require("@/features/desktop/employees/social2.svg")'/>
              <img class="st" :src='require("@/features/desktop/employees/social3.svg")'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    </div>-->
  </div>
</template>


<script setup>
const employees = [
  {
    img: '',
    name: 'Иван Иванов Иванович',
    position: 'UI/UX designer',
    department: 'Дизайн',
    step: '5/30 этап',
    status: 'В сети',
  }, {
    img: '',
    name: 'Иван Иванов Иванович',
    position: 'UI/UX designer',
    department: 'Дизайн',
    step: '5/30 этап',
    status: 'В сети',
  }, {
    img: '',
    name: 'Иван Иванов Иванович',
    position: 'UI/UX designer',
    department: 'Дизайн',
    step: '5/30 этап',
    status: 'В сети',
  }, {
    img: '',
    name: 'Иван Иванов Иванович',
    position: 'UI/UX designer',
    department: 'Дизайн',
    step: '5/30 этап',
    status: 'В сети',
  },

]
</script>


<style lang="scss" scoped>
@import "@/styles.scss";

#employeeComponent {

  $light_grey: #a8a8a8;

  .body {

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


    .content {

      margin-bottom: 10px;


      .line {
        display: flex;
        align-items: center;
        padding-bottom: 40px;

        .title {

          color: black;

          font-size: 24px;
          font-weight: 600;
        }

        .button {

          background-color: $color-purple;
          height: 32px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #fff;

          font-size: 15px;
          font-weight: 600;
        }

        .str {
          display: flex;
          flex-direction: row;
          align-items: center;

          font-size: 16px;
          font-weight: 600;
          padding-top: 10px;

          .purple {
            color: $color-purple;
            margin-right: 20px;
            border-bottom: 1px solid $color-purple;
          }

          .grey {
            color: #909090;
          }
        }
      }

      .head {
        display: flex;

        font-size: 12px;
        font-weight: 600;
        color: $light_grey;
      }


    }


    .empls {
      display: flex;
      flex-direction: column;

      .empl {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 90px;

        .icon {

          height: 40px;
          width: 40px;
          background-color: #6CE3FD;
        }

        .info {
          flex: 3;
          display: flex;
          flex-direction: column;

          .name {
            font-size: 16px;
            font-weight: 700;
            color: black;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .online {
            margin-left: 8px;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: $color-lime;
          }

          .position {
            font-size: 14px;
            font-weight: 500;
            color: $light_grey;
          }

        }

        .otdel {
          flex: 1;
          font-size: 14px;
          font-weight: 500;
          color: $light_grey;
        }

        .step {
          flex: 2;

          p {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 34px;
            width: 120px;
            background-color: rgba(103, 75, 167, 0.2);


            border-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            color: #8C64D8;
            opacity: 1;
          }
        }

        .status {
          flex: 2;

          .sts {
            border: 1px solid $light_grey;
            border-radius: 5px;

            display: flex;
            align-items: center;
            justify-content: center;
            height: 34px;
            width: 120px;
            font-size: 14px;
            font-weight: 500;
            color: #949494;
          }
        }

        .links {
          flex: 1;
          display: flex;
          flex-direction: row;
        }
      }
    }
  }

}
</style>
