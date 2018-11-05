class Macierze{
  constructor(){
      this.cacheDom();
      this.cacheVariables();
      this.cacheCalls();
  }
  cacheDom(){
    // CHOICE DIV DOM CACHE
    this.$choice = document.getElementsByClassName("choice")[0];
    this.$menu_btn1 = document.getElementsByClassName("1")[0];
    this.$menu_btn2 = document.getElementsByClassName("2")[0];
    this.$menu_btn3 = document.getElementsByClassName("3")[0];
    this.$menu_btn4 = document.getElementsByClassName("4")[0];
    this.$menu_btn5 = document.getElementsByClassName("5")[0];
    this.$menu_btn6 = document.getElementsByClassName("6")[0];
    this.$menu_btn7 = document.getElementsByClassName("7")[0];
    this.$menu_btn8 = document.getElementsByClassName("8")[0];
    // TWO MATRIXES DIMENTSIONS DOM CACHE
    this.$twoDimensions = document.getElementsByClassName("twoDimensions")[0];
    this.$input_2m_row = document.getElementsByClassName("row")[0];
    this.$input_2m_row2 = document.getElementsByClassName("row2")[0];
    this.$input_2m_column = document.getElementsByClassName("column")[0];
    this.$input_2m_column2 = document.getElementsByClassName("column2")[0];
    this.$button_entering_dimensions_2m = document.getElementsByClassName("button_entering_dimensions_2m")[0];
    // ONE MATRIX DIMENSIONS DOM CACHE
    this.$oneDimension = document.getElementsByClassName("oneDimension")[0];
    this.$input_1m_row = document.getElementsByClassName("row3")[0];
    this.$input_1m_column = document.getElementsByClassName("column3")[0];
    this.$button_entering_dimensions_1m = document.getElementsByClassName("button_entering_dimensions_1m")[0];
    // TWO MATRIXES VALUES ENTERING DOM CACHE
    this.$newMatrix = document.getElementsByClassName("newMatrix")[0];
    this.$matrix = document.getElementsByClassName("matrix")[0];
    this.$button_entering_2m = document.getElementsByClassName("button_entering_2m")[0];
    // MATRIX OUTPUT DOM CACHE
    this.$matrixOutputContainer = document.getElementsByClassName("matrixOutputContainer")[0];
    this.$matrixOutput = document.getElementsByClassName("matrixOutput")[0];
    // NUMBER OUTPUT DOM CACHE
    this.$numberOutputContainer = document.getElementsByClassName("numberOutputContainer")[0];
    this.$numberOutput = document.getElementsByClassName("numberOutput")[0];
  }
  // CACHE
  cacheVariables(){
    this.tab3=[];
    this.maxrzada=1;
    this.maxrzadb=1;
  }
  cacheCalls(){
    this.$menu_btn1.onclick = ()=>{this.addition()};
    this.$menu_btn2.onclick = ()=>{this.addition("-")};
    this.$menu_btn3.onclick = ()=>{this.multiplicationScalar()};
    this.$menu_btn4.onclick = ()=>{this.multiplicationMatrixes()};
    this.$menu_btn5.onclick = ()=>{this.transposition()};
    this.$menu_btn6.onclick = ()=>{this.laplaceMethod()};
    this.$menu_btn7.onclick = ()=>{this.equationCramer()};
    this.$menu_btn8.onclick = ()=>{this.rowOfMatrixes()};
  }
  // ANIMATIONS
  menuFadeOut(){
    this.$choice.style.display="none";
  }
  menuFadeIn(){
    // FOR MENU BUTTON
  }
  twoDimensionsFadeIn(){
    this.$twoDimensions.style.display="block";
  }
  twoDimensionsFadeOut(){
    this.$twoDimensions.style.display="none";
  }
  oneDimensionFadeIn(){
    this.$oneDimension.style.display="block";
  }
  oneDimensionFadeOut(){
    this.$oneDimension.style.display="none";
  }
  newMatrixFadeIn(){
    this.$newMatrix.style.display="block";
  }
  newMatrixFadeOut(){
    this.$newMatrix.style.display="none";
  }
  matrixOutputContainerFadeIn(){
    this.$matrixOutputContainer.style.display="block";
  }
  matrixOutputContainerFadeOut(){
    this.$matrixOutputContainer.style.display="none";
  }
  numberOutputContainerFadeIn(){
    this.$numberOutputContainer.style.display="block";
  }
  numberOutputContainerFadeOut(){
    this.$numberOutputContainer.style.display="none";
  }
  enteringTwoMatrixes(){
    this.row = parseInt(this.$input_2m_row.value);
    this.column = parseInt(this.$input_2m_column.value);
    this.row2 = parseInt(this.$input_2m_row2.value);
    this.column2 = parseInt(this.$input_2m_column2.value);

    for(let i=0; i<this.row; i++)
    {
        for(let j=0;j<this.column;j++)
        {
            let pom = document.createElement("input");
            pom.type = "number";
            pom.className = `ma1_${i}${j}`;
            this.$matrix.appendChild(pom);
        }
        let pom = document.createElement("br");
        this.$matrix.appendChild(pom);
    }

    let pom = document.createElement("div");
    pom.style.padding = "40px";
    this.$matrix.appendChild(pom);

    for(let i=0; i<this.row2; i++)
    {
        for(let j=0;j<this.column2;j++)
        {
            let pom = document.createElement("input");
            pom.type = "number";
            pom.className = `ma2_${i}${j}`;
            this.$matrix.appendChild(pom);
        }
        let pom = document.createElement("br");
        this.$matrix.appendChild(pom);
    }

  }
  enteringOneMatrix(){
    this.row = parseInt(this.$input_1m_row.value);
    this.column = parseInt(this.$input_1m_column.value);

    for(let i=0; i<this.row; i++)
    {
        for(let j=0;j<this.column;j++)
        {
            let pom = document.createElement("input");
            pom.type = "number";
            pom.className = `ma1_${i}${j}`;
            this.$matrix.appendChild(pom);
        }
        let pom = document.createElement("br");
        this.$matrix.appendChild(pom);
    }
  }
  enteringTwoMatrixesValues(callback){
    this.tabpom=[];
    this.tab1=[];
    this.tab2=[];

    for(let i=0; i<this.row; i++)
    {
        for(let j=0;j<this.column;j++)
        {
            let pom = `ma1_${i}${j}`;
            let pom_el = document.getElementsByClassName(pom)[0];
            this.tabpom.push(parseInt(pom_el.value));
        }
        this.tab1.push(this.tabpom);
        this.tabpom=[];
    }

    for(let i=0; i<this.row2; i++)
    {
        for(let j=0;j<this.column2;j++)
        {
            let pom = `ma2_${i}${j}`;
            let pom_el = document.getElementsByClassName(pom)[0];
            this.tabpom.push(parseInt(pom_el.value));
        }
        this.tab2.push(this.tabpom);
        this.tabpom=[];
    }

    if(callback) callback();
  }
  showMatrixOutput(tab){
    let pom=`${tab.length*60}px`;
    this.$matrixOutput.style.height = pom;

    pom=`${tab[0].length*60}px`;
    this.$matrixOutput.style.width = pom;

    for(let i=0; i<tab.length; i++)
    {
        for(let j=0; j<tab[0].length; j++)
        {
            let pom = document.createElement("div");
            pom.innerHTML = tab[i][j];
            this.$matrixOutput.appendChild(pom);
        }
        let pom = document.createElement("div");
        pom.style.cssText = "clear: both; padding: 0; border: 0; width: 0; height: 0;";
        this.$matrixOutput.appendChild(pom);
    }
  }
  showMatrixOutputT(tab){
    let pom=`${tab.length*60}px`;
    this.$matrixOutput.style.width = pom;

    pom=`${tab[0].length*60}px`;
    this.$matrixOutput.style.height = pom;

    for(let j=0; j<tab[0].length; j++)
    {
        for(let i=0; i<tab.length; i++)
        {
            let pom = document.createElement("div");
            pom.innerHTML = tab[i][j];
            this.$matrixOutput.appendChild(pom);
        }
        let pom = document.createElement("div");
        pom.style.cssText = "clear: both; padding: 0; border: 0; width: 0; height: 0;";
        this.$matrixOutput.appendChild(pom);
    }
  }
  showNumberOutput(a){
    let p = document.createElement("p");
    p.innerHTML = a;
    this.$numberOutput.appendChild(p);
  }
  // OPERATIONS
  addition(param="+"){

    this.menuFadeOut();
    this.twoDimensionsFadeIn();

    // WARUNEK DODAWANIA MACIERZY
    this.$button_entering_dimensions_2m.onclick = ()=>{
      if(parseInt(this.$input_2m_row.value) != parseInt(this.$input_2m_row2.value) || parseInt(this.$input_2m_column.value) != parseInt(this.$input_2m_column2.value)){
        let alert = document.createElement("p");
        alert.innerHTML = "Nie mozna dodac i odejmowac macierzy o takich wymiarach. Macierze muszą miec taką samą ilośc kolumn i rzędow.<br>Wprowadź ponownie wymiary macierzy.";
        alert.style.color = "red";
        this.$twoDimensions.appendChild(alert);
      }
      else{
        // ANIMACJE
        this.twoDimensionsFadeOut();
        this.newMatrixFadeIn();
        // WPROWADZENIE WARTOSCI DWOCH MACIERZY
        this.enteringTwoMatrixes();
        this.$button_entering_2m.onclick = ()=>{
          this.enteringTwoMatrixesValues(()=>{
            if(param=="+"){
              let tabpom=[];

              for(let i=0;i<this.row;i++){
                for(let j=0;j<this.column;j++){
                  tabpom.push(this.tab1[i][j] + this.tab2[i][j]);
                }
                this.tab3.push(tabpom);
                tabpom=[];
              }
            }
            else if(param=="-"){
              let tabpom=[];

              for(let i=0;i<this.row;i++){
                for(let j=0;j<this.column;j++){
                  tabpom.push(this.tab1[i][j] - this.tab2[i][j]);
                }
                this.tab3.push(tabpom);
                tabpom=[];
              }
            }
            this.newMatrixFadeOut();
            this.matrixOutputContainerFadeIn();
            this.showMatrixOutput(this.tab3);
          });
        };
      }
    };
  }
  multiplicationScalar(){
    this.menuFadeOut();
    this.oneDimensionFadeIn();

    this.$button_entering_dimensions_1m.onclick = ()=>{
      this.oneDimensionFadeOut();
      let pom = document.createElement("p");
      pom.className = "p_scalar";
      pom.innerHTML = "Skalar :";
      let input = document.createElement("input");
      input.type = "number";
      input.className = "input_scalar";
      input.value = 1;
      this.$button_entering_2m.parentNode.insertBefore(pom, this.$button_entering_2m);
      this.$button_entering_2m.parentNode.insertBefore(input, this.$button_entering_2m);
      this.newMatrixFadeIn();
      this.enteringOneMatrix();
      
      this.$button_entering_2m.onclick = ()=>{
        this.enteringTwoMatrixesValues(()=>{
          let input_scalar = document.getElementsByClassName("input_scalar")[0];
          let scalar_pom = parseFloat(input_scalar.value);

          for(let i=0;i<this.tab1.length;i++){
            for(let j=0;j<this.tab1[0].length;j++){
              this.tab1[i][j]*=scalar_pom;
            }
          }

          this.newMatrixFadeOut();
          this.matrixOutputContainerFadeIn();
          this.showMatrixOutput(this.tab1);
        });
      }
    }
  }
  multiplicationMatrixes(){
    this.menuFadeOut();
    this.twoDimensionsFadeIn();

    this.$button_entering_dimensions_2m.onclick = ()=>{
      // WARUNEK MNOZENIA MACIERZY
      if(parseInt(this.$input_2m_column.value)!=parseInt(this.$input_2m_row2.value)){
        let alert = document.createElement("p");
        alert.innerHTML = "Nie mozna mnozyc macierzy o takich wymiarach. Liczba kolumn pierwszej macierzy musi byc rowna licznie wierszy drugiej macierzy";
        alert.style.color = "red";
        this.$twoDimensions.appendChild(alert);
      }
      else{
        // ANIMACJE
        this.twoDimensionsFadeOut();
        this.newMatrixFadeIn();
        // WPROWADZENIE WARTOSCI DWOCH MACIERZY
        this.enteringTwoMatrixes();
        this.$button_entering_2m.onclick = ()=>{
          this.enteringTwoMatrixesValues(()=>{
            let tabpom=[];
            let pom=0;

            for(let i=0;i<this.row;i++){
              for(let j=0;j<this.column2;j++){
                for(let k=0;k<this.column;k++){
                  pom+=this.tab1[i][k]*this.tab2[k][j];
                }
                this.tabpom.push(pom);
                pom=0;
              }
              this.tab3.push(this.tabpom);
              this.tabpom=[];
            }

            this.newMatrixFadeOut();
            this.matrixOutputContainerFadeIn();
            this.showMatrixOutput(this.tab3);
          });
        };
      }
    }
  }
  transposition(){
    this.menuFadeOut();
    this.oneDimensionFadeIn();

    this.$button_entering_dimensions_1m.onclick = ()=>{
      this.oneDimensionFadeOut();
      this.newMatrixFadeIn();
      this.enteringOneMatrix();
      this.$button_entering_2m.onclick = ()=>{
        this.enteringTwoMatrixesValues(()=>{

          this.newMatrixFadeOut();
          this.matrixOutputContainerFadeIn();
          this.showMatrixOutputT(this.tab1);
        });
      }
    }
  }
  laplaceMethod(){
    this.menuFadeOut();
    this.oneDimensionFadeIn();

    this.$button_entering_dimensions_1m.onclick = ()=>{
      // WARUNEK LICZENIA WYZNACZNIKA MACIERZY KWADRATOWEJ
      if(parseInt(this.$input_1m_row.value)!=parseInt(this.$input_1m_column.value)){
        let alert = document.createElement("p");
        alert.innerHTML = "Nie można wyznaczyc det(A) tej macierzy. Macierz nie jest kwadratowa";
        alert.style.color = "red";
        this.$oneDimension.appendChild(alert);
      }
      else{
        this.oneDimensionFadeOut();
        this.newMatrixFadeIn();
        this.enteringOneMatrix();
        this.$button_entering_2m.onclick = ()=>{
          this.enteringTwoMatrixesValues(()=>{

            let a = this.laplaceMethodCount(this.tab1, this.row);

            this.newMatrixFadeOut();
            this.numberOutputContainerFadeIn();
            this.showNumberOutput(a);
          });
        }
      }
    }
  }
  laplaceMethodCount(tab, degree){
    let ne_columnMat, nr_columnComp;
    let det=0;
    let tabpomoc=[];

    this.tabpom=[];
    if(degree<=2) {
      return tab[0][0]*(degree>1 ? tab[1][1] : 1) - (degree>1 ? tab[0][1] * tab[1][0] : 0);
    }

    for(let pom_column_nr=0;pom_column_nr<degree;pom_column_nr++){
      for(nr_columnComp=0, ne_columnMat=0;nr_columnComp<degree-1;nr_columnComp++,ne_columnMat++){
        ne_columnMat+=(ne_columnMat == pom_column_nr ? 1 : 0);
        for(let pom_row_nr=0;pom_row_nr<degree-1;pom_row_nr++){
          this.tabpom.push(tab[pom_row_nr+1][ne_columnMat]);
        }
        tabpomoc.push(this.tabpom);
        this.tabpom=[];
      }
      det+=(tab[0][pom_column_nr] * Math.pow(-1,1+pom_column_nr+1) * this.laplaceMethodCount(tabpomoc,degree-1));
      tabpomoc=[];
    }
    tabpomoc=[];
    return det;
  }
  equationCramer(){
    let pom = document.getElementsByClassName("twoDimensions-p");
    pom[0].innerHTML = "Wprowadz wymiary pierwszej macierzy (A)";
    pom[1].innerHTML = "(m-liczba równań, n-liczba zmiennych)";
    pom[2].innerHTML = "Wprowadz wymiary drugiej macierzy (B)";
    pom[3].innerHTML = "(m2-liczba równań, n2=1)";
    pom = document.getElementsByClassName("rownanie_example")[0];
    pom.style.display = "block";

    this.menuFadeOut();
    this.twoDimensionsFadeIn();

    this.$button_entering_dimensions_2m.onclick = ()=>{
      if(parseInt(this.$input_2m_row.value)!=parseInt(this.$input_2m_row2.value) || parseInt(this.$input_2m_row.value)!=parseInt(this.$input_2m_column.value) || parseInt(this.$input_2m_column2.value)!=1){
        let alert = document.createElement("p");
        alert.innerHTML = "Wprowadzone wymiary są niepoprawne. Liczby wierszy obu macierzy muszą byc równe, pierwsza macierz musi byc kwadratowa, a N2 musi byc równe 1";
        alert.style.color = "red";
        this.$twoDimensions.appendChild(alert);
      }
      else{
        this.twoDimensionsFadeOut();
        this.newMatrixFadeIn();
        this.enteringTwoMatrixes();
        this.$button_entering_2m.onclick = ()=>{
          this.enteringTwoMatrixesValues(()=>{

            this.linearEquation();

            this.newMatrixFadeOut();
            this.matrixOutputContainerFadeIn();
            this.showMatrixOutput(this.tab3);
          });
        }
      }
    }
  }
  linearEquation(){
    if(this.laplaceMethodCount(this.tab1,this.row)!=0){
      let a = this.laplaceMethodCount(this.tab1,this.row);
      this.linearEquationTransposition();

      let matrix_pom=[];
      this.tabpom2=[];
      for(let i=0;i<this.row;i++){
        for(let j=0;j<this.column;j++){
          let aaa=this.linearEquationMacierzDopelnien(this.tab1,this.row,i,j);
          this.tabpom2.push(aaa);
        }
        matrix_pom.push(this.tabpom2);
        this.tabpom2=[];
      }

      let aa = 1/a;
      this.linearEquationMatrixesMultiplication(matrix_pom,this.tab2);
      this.linearEquationScalar(this.tab3,aa);
    }
    else{
      alert("Układ nie jest Cramerowski. Macierz odwrotna nie istnieje.");
    }
  }
  linearEquationTransposition(){
    let pom;

    for(let i=0;i<this.row;i++){
      for(let j=i;j<this.column;j++){
        if(i==j) continue;
        else{
          pom=this.tab1[i][j];
          this.tab1[i][j]=this.tab1[j][i];
          this.tab1[j][i]=pom;
        }
      }
    }
  }
  linearEquationMacierzDopelnien(tab,degree,ii,jj){
    let array_helpd=[];
    let iii=0,jjj=0;
    this.tabpom=[];

    if(degree==1 && ii==0 && jj==0) return 1;

    for(let i=0;i<degree;i++){
      if(i==ii) {continue;}
      else{
        for(let j=0;j<degree;j++){
          if(j==jj) {continue;}
          else{
            this.tabpom.push(tab[i][j]);
            jjj++;
          }
        }
        array_helpd.push(this.tabpom);
        this.tabpom=[];
        jjj=0;
        iii++;
      }
      this.tabpom=[];
    }
    let detd=this.laplaceMethodCount(array_helpd,degree-1);
    array_helpd=[];
    let pom=ii+1;
    pom+=jj+1;
    detd*=Math.pow(-1,pom);
    array_helpd=[];
    return detd;
  }
  linearEquationMatrixesMultiplication(tab1, tab2){
    this.tabpom=[];
    let pom=0;

    for(let i=0;i<tab1.length;i++){
      for(let j=0;j<tab2[0].length;j++){
        for(let k=0;k<tab1[0].length;k++){
          pom+=tab1[i][k]*tab2[k][j];
        }
        this.tabpom.push(pom);
        pom=0;
      }
      this.tab3.push(this.tabpom);
      this.tabpom=[];
    }
  }
  linearEquationScalar(tab, scalar){
    for(let i=0;i<tab.length;i++){
      for(let j=0;j<tab[0].length;j++){
        tab[i][j]*=scalar;
      }
    }
  }
  rowOfMatrixes(){
    let pom = document.getElementsByClassName("twoDimensions-p");
    pom[0].innerHTML = "Wprowadz wymiary pierwszej macierzy (A)";
    pom[1].innerHTML = "(m-liczba równań, n-liczba zmiennych)";
    pom[2].innerHTML = "Wprowadz wymiary drugiej macierzy (U)";
    pom[3].innerHTML = "(m2-liczba równań, n2-liczba zmiennych+1)";
    pom = document.getElementsByClassName("rownanie_example2")[0];
    pom.style.display = "block";

    this.menuFadeOut();
    this.twoDimensionsFadeIn();

    this.$button_entering_dimensions_2m.onclick = ()=>{
      if(parseInt(this.$input_2m_row.value)!=parseInt(this.$input_2m_row2.value) || parseInt(this.$input_2m_column2.value)!=parseInt(this.$input_2m_column.value)+1){
        let alert = document.createElement("p");
        alert.innerHTML = "Wprowadzone wymiary są niepoprawne. Liczby wierszy obu macierzy muszą byc równe, a liczba kolumn drugiej macierzy musi byc o 1 większa od liczby kolumn macierzy nr 1";
        alert.style.color = "red";
        this.$twoDimensions.appendChild(alert);
      }
      else{
        this.twoDimensionsFadeOut();
        this.newMatrixFadeIn();
        this.enteringTwoMatrixes();
        this.$button_entering_2m.onclick = ()=>{
          this.enteringTwoMatrixesValues(()=>{

            this.rowOfMatrixesCount(this.tab1,this.row,this.column);
            this.maxrzadb=this.maxrzada;
            this.maxrzada=1;
            this.rowOfMatrixesCount(this.tab2,this.row2,this.column2);
            this.inference(this.maxrzadb,this.maxrzada,this.column);

            this.newMatrixFadeOut();
            this.numberOutputContainerFadeIn();
            let pom = `rz(A) = ${this.maxrzadb}, rz(U) = ${this.maxrzada}. ${this.inference(this.maxrzadb, this.maxrzada, this.column)}`;
            this.showNumberOutput(pom);
          });
        }
      }
    }
  }
  rowOfMatrixesCount(tab, row, column){
    let ii,jj,iii=0,jjj=0;

    if(row == column){
      if(row==1){
        if(1>this.maxrzada) this.maxrzada=1;
      }
      if(this.laplaceMethodCount(tab,row)!=0){
        if(row>this.maxrzada) this.maxrzada=row;
      }
      else{
        for(let i=0;i<row;i++){
          for(let j=0;j<column;j++){
            this.tabrzad=[];
            this.arrayhelp(tab,this.tabrzad,row,column,i,j);
            this.rowOfMatrixesCount(this.tabrzad,row-1,column-1);
          }
        }
      }
    }
    else{
        if(column>row){
          for(let i=0;i<column;i++){
            this.tabrzad=[];
            this.arrayhelp2(tab,this.tabrzad,row,column,i);
            this.rowOfMatrixesCount(this.tabrzad,row,column-1);
          }
        }
        else if(row>column){
          for(let i=0;i<row;i++){
            this.tabrzad=[];
            this.arrayhelp3(tab,this.tabrzad,row,column,i);
            this.rowOfMatrixesCount(this.tabrzad,row-1,column);
          }
        }
    }
  }
  arrayhelp(tab,tab2,row,column,ii,jj){
    let iii=0,jjj=0;
    let tabpom=[];
    for(let i=0;i<row;i++){
      if(i==ii) continue;
      else{
        for(let j=0;j<column;j++){
          if(j==jj) continue;
          else{
            tabpom.push(tab[i][j]);
            jjj++;
          }
        }
        tab2.push(tabpom);
        tabpom=[];
        jjj=0;
        iii++;
      }
    }
  }
  arrayhelp2(tab,tab2,row,column,pom){
    let iii=0,jjj=0;
    let tabpom=[];
    for(let i=0;i<row;i++){
      for(let j=0;j<column;j++){
        if(j==pom) continue;
        else{
          tabpom.push(tab[i][j]);
          jjj++;
        }
      }
      tab2.push(tabpom);
      tabpom=[];
      jjj=0;
      iii++;
    }
  }
  arrayhelp3(tab,tab2,row,column,pom){
    let iii=0,jjj=0;
    let tabpom=[];
    for(let i=0;i<row;i++){
      if(i==pom) continue;
      else{
        for(let j=0;j<column;j++){
          tabpom.push(tab[i][j]);
          jjj++;
        }
      }
      tab2.push(tabpom);
      tabpom=[];
      jjj=0;
      iii++;
    }
  }
  inference(a,u,n){
    if(a<u) {return "Uklad jest sprzeczny";}
    else if(a==u && u==n) {return "Uklad ma dokladnie jedno rozwiazanie";}
    else {return "Uklad ma nieskoczenie wiele rozwiazan";}
  }
}

const macierze = new Macierze();

// TODO: BACK TO MENU BUTTON
