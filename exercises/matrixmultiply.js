function matrixMultiply(m1,m2){
  var m3 = [[],[]];
  m3[0][0] = m1[0][0]*m2[0][0];
  m3[0][1] = m1[0][1]*m2[0][1];
  m3[1][0] = m1[1][0]*m2[1][0];
  m3[1][1] = m1[1][1]*m2[1][1];
  console.log(m3);
}
matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]);
