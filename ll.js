let age = 22;
let inscrit = true;
let paiement = false;


// +---+---------------------------------------------------------+-----------------+
// | # | Expression                                              | Expected Result |
// +---+---------------------------------------------------------+-----------------+
// | 1 | age >= 18                                               |      True       |
// | 2 | inscrit === true                                        |      True       |
// | 3 | paiement === true                                       |      False      |
// | 4 | age >= 18 && inscrit === true                           |      True       |
// | 5 | inscrit === true \|\| paiement === true                 |      True       |
// | 6 | !paiement                                               |      True       |
// +---+---------------------------------------------------------+-----------------+