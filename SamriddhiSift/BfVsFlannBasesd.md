BFMatcher is going to try all the possibilities (which is the meaning of "Brute Force" and hence it will find the best matches.

FLANN, meaning "Fast Library for Approximate Nearest Neighbors", will be much faster but will find an approximate nearest neighbors. It will find a good matching, but not necessarily the best possible one. You can play with FLANN's parameters in order to increase the precision (i.e. the "quality" of the matchings), but it will be at the cost of slowing the algorithm.

In other words: FLANN is much faster than BFMatcher but it only finds an approximate nearest neighbor, which is a good matching but not necessarily the best. You can play with the parameters of FLANN in order to increase its speed or its precision.
