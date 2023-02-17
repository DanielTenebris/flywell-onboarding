<template>
  <div id="page">
    <form>
      <input id="fform" placeholder="Поиск по сервисам" type="search">
    </form>
    <p id="paragraph">Инфраструктура и сеть</p>
    <div class="grid">
      <div class="divniy">

        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:chip"/>

            </div>
            <p class="lbl">
              Compute Cloud
            </p>
          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Виртуальные машины и диски</p>

      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
            <Icon class="icon" icon="bx:collection"/>

          </div>
          <p class="lbl">
            Object Storage
          </p>
        </div>
        <div class="pin">
          <Icon class="icon2" icon="bx:pin"/>
        </div>
      </div>
        <p class="vnizu">Масштабируемое хранилище данных</p>

      </div>
      <div class="divniy">


        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:git-repo-forked"/>

            </div>
            <p class="lbl">
            Virtual Private Cloud
            </p>
          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Управление сетями в облаке</p>

      </div>
      <div class="divniy">


        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:minus-front"/>
            </div>

            <p class="lbl">
              Cloud Desktop
            </p>
            <p class="preview">
              PREVIEW
            </p>

          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Удаленные рабочие места в облаке</p>


      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:disc"/>
            </div>

            <p class="lbl">
              API Gateway
            </p>


          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Интеграция с сервисами Yandex Cloud при помощи API</p>


      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:fork"/>
            </div>

            <p class="lbl">
             Network Load Balancer
            </p>


          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Сетевые балансирующие нагрузки</p>

      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:bar-chart-square"/>
            </div>

            <p class="lbl">
              Application Load Balancer
            </p>


          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Балансирующие нагрузки уровня приложения</p>
      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:task"/>
            </div>

            <p class="lbl">
              Load Testing
            </p>
            <p class="preview">
              PREVIEW
            </p>

          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Нагрузочное тестирование и анализ производительности</p>
      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:cloud"/>
            </div>

            <p class="lbl">
              Cloud CDN
            </p>


          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Организация сети распространения контента</p>

      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:world"/>
            </div>

            <p class="lbl">
             Cloud DNS
            </p>


          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Управление доменными именами</p>
      </div>

      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:loader-alt"/>
            </div>

            <p class="lbl">
              Cloud Backup
            </p>
            <p class="preview">
              PREVIEW
            </p>

          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Сервис создания резервных копий виртуальных машин</p>
      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:pulse"/>
            </div>

            <p class="lbl">
              Monitoring
            </p>


          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Сбор и визуализация метрик</p>
      </div>
      <div class="divniy">
        <div class="line">
          <div class="osn">
            <div class="circle">
              <Icon class="icon" icon="bx:menu-alt-left"/>
            </div>

            <p class="lbl">
              Cloud Logging
            </p>
            <p class="new">
              NEW
            </p>

          </div>
          <div class="pin">
            <Icon class="icon2" icon="bx:pin"/>
          </div>
        </div>
        <p class="vnizu">Логирование сервисов Yandex Cloud</p>
      </div>

    </div>
  </div>
</template>


<script setup>
import {Icon} from '@iconify/vue';
</script>


<style lang="scss" scoped>
$bcolor: rgba(255, 255, 255, 0);
$ser_color: #868686;
$blue: #4f91ff;
#page {
  padding: 15px;
}

#fform {
  width: 50%;
  padding: 5px 7px;
  background-color: $bcolor;
  border: 1px solid $ser_color;
  border-radius: 5px;
  outline: none;
}

#paragraph {
  color: white;
  padding: 10px 0px;
  font-size: 30px;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 200px);
  column-gap: 50px;
  row-gap: 50px;
}

.divniy {

  border: 1px solid $ser_color;
  border-radius: 10px;
  padding: 30px;
}
.divniy:hover{
  background: rgba(191,191,191,0.25);
  .pin{
    background-color: rgba(229, 216, 216, 0.25);
  }
}
.circle {
  border-radius: 25px;
  background-color: $blue;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.icon {
  color: white;
  transform: scale(2);
}

.icon2 {
  color: $ser_color;
  transform: scale(2) rotate(45deg);

}

.lbl {
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pin {
  border-radius: 5px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;


}

.vnizu {
  color: $ser_color;
}
.osn{
  display: flex;
  align-items: center;

  flex-basis: 80%;
}

.preview{
  color:$blue;
  font-weight: lighter;
  font-size: 20px;
  margin-left: 5px;
  align-self: flex-end;
}
</style>
