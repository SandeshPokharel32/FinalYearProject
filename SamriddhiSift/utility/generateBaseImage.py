from cv2 import resize, GaussianBlur, INTER_LINEAR
from numpy import sqrt


#########################
# Image pyramid related #
#########################
def generateBaseImage(image, sigma, assumed_blur):
    logger.debug('Generating base image...')
    image = resize(image, (0, 0), fx=2, fy=2, interpolation=INTER_LINEAR)
    sigma_diff = sqrt(max((sigma ** 2) - ((2 * assumed_blur) ** 2), 0.01))
    return GaussianBlur(image, (0, 0), sigmaX=sigma_diff, sigmaY=sigma_diff)  # the image blur is now sigma instead of assumed_blur