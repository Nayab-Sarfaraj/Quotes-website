import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  const categories = [
    {
      title: "Philosophical",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADsAWoDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgf/xABBEAACAgEDAgQEAwgBAwMCBwEBAgMRAAQSITFBBRNRYSJxgZEUMqEGI0JSscHR8OEzYnIVJPFTgkNjc4OSk7PC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACYRAAICAgICAgIDAQEAAAAAAAABAhEDEiExBEEiURNhFDJxQoH/2gAMAwEAAhEDEQA/APmzMfvgHORuuQGsyo0CReCsbdeKe+MQflgbmryDG4HXABboDpQ7c5OPTDfoKxe/98Bh4rnjGVkBJOJzgJwEaRJHQG4D74x5HFHMl4QSpsEj5YUBrAHzw5Qk3Zh8iBl4ING8VDJRH98gF/LqPnk4PB6YwrJ4AWqwUce8Brr+nvgANuMoI5BPQj5jB8jhBywAQe3XBR5vHv5YpF/xEfIDJoLBisAeo5yzAR74Dso2EcjBdHLyPfjFKg9QMdBZVzfX5ZOmOUI6HKzY68YUDYdx9Mm48deMH175PTkcY6JIGbnGBb5Yow/XARZvb1/TFDML56nBz0vB0498VFWNuPfJuNYpJ9sUk4qHZZfGLeL8Q+2TnjACE9cU4xB55/TFr3x2JoAxr474Kwc8dMBE59cnOSz6jAT6nCgJbWOcfzX/ANGV89b98ln2xFJjN29cF4x9cGMkgw89K5wY4Ff3wGDpgJyHFwAhwZOuT64xEyX/AFyYMBBsYR1wc4ecBkNAm8ZXKmwDXceuJzhF4AawwYWOmMMzwtTbSaD8Wex7HNBBBIrkGj9MmivRDxgu6yVhA++AgdzeHIexFYOf9OUIJOQYKPphNgGhz7GsQDXkv+mCjgN+2FgQnFyMHrgL9cAV+dxBFHheDf1/xjAOCge2Sn/7fuf8ZPiBAocgm7Pb6YAKU9MQgjrlvx+i/f8A4wfF6D7/APGAFI64bOPsJ6AD63ilWHUYCBZyYOe1ZKb/AE4AQknrk9cNH/Tgo+uAwOaF4VJoYjWbA6A0fnjKaO37H2xDHJ64hOE7sU3iodhHbA3XBeQkcY0IBvBzks5L9sYg9jlfxepywWbFHp1yuvY/cf4yWBcb4yZDyOv2yc1jHQV5NnoK++Hm7yDp8+cHrgBDgyXkIvnGIXpkw1grARLOCzhXJ3wAnGQnDWAjGARh4xQMOIA8ZuFPFHJ3AAbOf1zfoyCrIehJH3xMpA7nCMlEEg9iR9sOTdlUKf8AnIDwDjde+A9emOyQC8PrkF+hyduhwAasXkYa9sBv0xDJg9clnjg5OfQ/pjAJAoYtcjDgIaxxxRvARDgw0fQ5KPpjEAd8nfJR/wDjJ9MAFZAcXYecez6HCp46HExorrBWXHaRyDlZFdOfpiK4KSrBiV6Hk+xyKpuyPtlnA7HAecYuAHocrJxzZ7HBtbrtONEsTIccK38uKQwPTGIXJk59MlE9jiGOv9sX/emEWK4xLH8rfpklFnbIMn0yDrlCLKvFrHsYhxICEc4DeTJxlCEODGNZALwEAYQLw0R6ZO+AB2/f54psY3cnJzgAgNZLxiN14hBBxgMDmvREF6+v1zCCc1aI05PyOTLopdmqUbZJPcg/fF6nLZ6D36qPuMqBX1zNLg0sNZPTJY6XgdgADY736DjAVkNDDx9cUajQqCWMj1QCKQhuubNHKDqkLErHS9K3E/rjQNGhtwrmr+9euAA+uEOkpL2pJq/Ue2E0ScokU3x88mE/3xePf7YCJzhwWP8AbyEjGBP964MNYOffEAO5yZApJPGEgLV9/QE/0wAFZMBZR69a5BGQG/cfI1jAODpWHgdv64D2wEQgHriFct4wGsBlOEdMYge2Db88AJ9sRup+QwkkYpYWB7YCBWSsmNgAK65SQbPGXggXzifD6j7N/jFRVAGEf3wDp075OePnlCHJ5xT1wnB36dsQEGQ9cmL3xiD/AIxgGXqCPngAsjj0y15Awry0HxORtu/ir+mAhD2xe+E3gxiDeMFY9AT1PHtig0br744lIqkToy8j174ABkdOorgHn36dMVhY73jeYf5U/hHT0wHnsBySADgBTyDmrRrbt9MykEE5u0Kk+c9cIFZj6C6yJdFx5NGoAHkVx+7P9cp/XL9RR8n2Qg/fKPSsUehsgB9cNAgggEHqD0yZARdWPuMYFcmniKNS7SBYIJ6/LFhgj2B2FlrPsB0zQa2t8j/TEjP7pea4/uckAgInCgDDYPQ/bKmToSRZ55POMEqiG6+hyhFmTjBkN4AHjB3GDCOowAehi/fL4YNRqSy6aCaZkrf5CFgt9Nx6D74J9PqNOwTURPG3PD1291JGQ5JOmVTKhlvkt5BnVrCyeXMtEGMsLQm+zc0fYj50q3POdv8A9tJ4RInh8Uf4oRJF4gxQGaZWPmgpzW0MK6X09czyT1o0xx2dHDYA2GAIPUHASSR7KqiuBSjaOmNe4A9j+mKQM1TM2iXgOQjJx7ZRIpwcYTg64wIcnODpje2SAhF9cUiiSP1yzjABuNAE9SQPQCycRSKrIw/XHdGUlXVlIPIYURldYWBd+GlCLIarYHAJ6g7uh+n65T9T9s6Gk/8AcRHSqLmEb8EAlk3CtpPpxmA2pKkrYJB+LuMlS5aZbx3TRXRyDt88l8ZBVjNTIZgcWzxjnEwANnBksYLGMQy/mT55b5UprahNmgSKBN1QJ4/XKoqMsQurYC/T3zrPvhhi3tUkLS/hxYoKDuLAHjnM5z16LhHY5rxSRmnUqaumBHHtiV1y+WVpaL1uFgkdOeRxkWINBNN5q/A6IsdWzbhd36DKT45J1t0ZyDk6Y1E3gr2yiUDjDXzyUcPPtzgMqb8x+edrwbTq8bltpaWV2iU9NunWy5+pofLOfptL57ylyQibRQ/iJvi86WllEEhVV3LDpZY4ua2CRuTfcg85z5XutI9m+JaPd9FMtVGaoFCf1zOZIx3v3HIH1y8jzfw4sBQjXuFk7W29vfC2mR2lEdMVALW6hmA5O339RjU64YLG5copBB5BBHqOQcncfPM0ZaKXaaCvQr0PUGs1f2zS16M9WuwN0P1xY/8App9f6nGPNj2NYIv+knqLB+YJyRhYKRyB2684TZq/QfbAQOmMR/jKELXIw1hrkZKxiCAMB6GquuDhv0xbWyu4buPhBtvlQ5xXQj6H4PJoNHp9Hp1WMxrAdRMyBms0rGRwvNn5Z5j9otfBr9THNCkyx28SmSAwh9pAavlxl/h3/qPkSzFZoH/daaNpY3QSRctIQrAMTyPtnI8Q1OpnkiEjuIQWeNJGJKhmI3PzW41znlY4Vmbs9NqP4jKO/Azo+Dc+KeGJdLJqBC4HQq6sCCB/vGL4Z4VrvFm1I0YjIgW5GlYqoJohbAP+jOz4V4H4povEPCNbOuneCOYSS+VKWaENE1MwZRwLHS+vtndlnFQds4YJ7KjieJwHT+Ia+IrtBmaVBxVNzxmIAkhVFseABQ/XO3+0m1tfGw6mIhvoTRzixsokUte29rbb3U3wmq5vJwybxplZUvyDzxJBW91PB3EEbRRrrnOmeuUI77SO/P2zuz+TpdXp5lWNYoTCZlDLqrWQbmKJKtGhfXMev2Ty7i7SOxZmdhGEZb+DyggA2kURjhlfFlvCqtGVCGRG7soPTDQyxIXEW6qVCqAtwG7WD6ZI082WCI2BLIiHb12seSPpedGyOfR9Grw7w7/1Fp0jcF0QsFSiwA7tYqsGv8Mm0IjdvijflCRRquRx3HfOkmq0+/UvpX1kcEKRwbdN+Ysp2ohsFdpJ9b6dL4weJSOFSKV2eSLTwQsWfdtKgtIOldSF49D65xxyylP9HW/HUY3ZzgN1BSLPTvlaHypfhKkm42VrrdfAYnsckZbYjAAkEmr/ADX6ZSWNzbgeTdHsSb4zpZzR4NOomlk3OX3AOxK7QAN1GxX2+mVKQwBoelZcsUpDx+W4YnuK/U4q6eQOVtR1I5JoDqScUZJG08MpK0h9MpLyEEgLHfoCSe5ysrZJ2nr6jNEYWLzRu5+BWPzBN5Qbs/Ev6ZDdytGyi8cFF9mXnCLsfPBhHJHzGdB54xxLxzQxDzjAA5yEc5Fq/pjcXjESMkOp6UbB980+YX2bz+QFVrpR9czgDeuXDIlFFxYpIDrYHwiK76GuOTm6NYkWYNGvxTFja2AqggKp9Of9rMgJB4sH1yO7bhuZ2taPxEeuQ0aQaT5K2oE10v8AvgJ6f2wsQenAzq+E+Ba7xRJZ1ZYdJGzR+c6ljJIosrGvt3N+2W5KCtmdW+DlAdOOfTqTmmPTbiFP5j2B4Ue5y3VaRNBqAhk3cCiQAVJ7GuP99ssZlijLXZDEufmAD9u3y98h5LaRpHHw2y6A6ODzI/w29y4keRpGVVAG2mWq+WElUEh2gWoAVQKUAWAcwtqI1IF/CKdiP4iOigfr/wDGUvqTKxL8IvxVfUCybrK0jF2ZbSkqOp4foNRrR5qUsGlRnnkcqFPx/wDTDPwCepPYe/B7Ph8fhLyAaTw3z3TzT5mnEzsEa46k3kle+0ntR+WbVpq9H4f4V4fpht08ujgklRVBkm1EqCeRnY88k8ewz13g0en8L8I00JTbqJIxNqrFO0zjcwb5dB8s8rPlbW1/4erij+NJUc7UaHw1Vikn8PSGc7WmYxoyAhdtb1JAHpmGH9nfD9ekskMksTxvTeSEeIjqPgfkH656aZodRpHZadPLPxDobB4GeX8L1kfhuu1+naU/h54CjFVZwJgA6FQOb/Muc+Oc9W0+SpQU+KOTP4RNHONMrxvK7rFGWqNWZ72izwCeAPnnMSJo1MboVZGdWVhTKwYggjOt4jqfMPmANGCYQlm5GZRy19qoce+Y55ZNWzax02/iTuJH5WlUbZK+vP1z0sOST/sY+TgUEnHhiabTxzO+80iIZGolbUcEs9GgOOgJNgDrYsdvB49MzbJH1LSMIljmYp5Y43yhhwT2Wz75mVmCSAGg20MB0IU2Ac3O2hEcZh00rSSOYgHDzIz1wiDreXlbi+b/APDLx4RyJri/2YEAksAorCyA7BbH/aW4vLE02plmTTxQSyaiQ1HFEpZ24vgDt6m8EpMrndDpoQDQXTR+WvHHIBOX6DxDV+GySvpnAaSMxG13Ard9MbnNLhEPHBvs6+g/Z0JOjeM7U04Us2nimBdyO0zpwF9aPOepQeGlGi8KXQ6bYURzpYUDxE8i6G6/Q2c+ey6vVaqQyTyMzHuTx9hxm/wCbUQeKwCAll1CtHqEb8rRr8V/MdR/znLlx5JLZsuDxx4R7rxCEaiGRJEvqyGwGWQD4Tu6/PPF6r9ntZJJK7TbpZdrKFUKg4BIY3VA3nvp/Lki3RurVuXcrCrWwbIznapCkCShwbQOGPNbheceJyi+DrtNUzN+yWlbw/T66GVkMsusgjlKE/kkUIKJ56E5hn8bTReJ+LaWdJXSNdJFGIlBCtFCIXXnjqLy39n5/wATPrpA1ofEdDGCSaYrGzWM4HjikeP+NAA1NOkyAAkkyDooHvedygsi1mcLk4ztGXxPV/jZVk8nywm9VAbcdpNjdXF5mi05Cecb3VaKD79bPf0zU/h+tpSyJGCASJHAcL6lQDkYTsiNBGrQo7wGUljFI4WzHGR1I4s3wflnTHWMaXRnNuTtmaRIpodHe1XZvw0nxEHaOVdieOhr6HDq4o0VhUARV+FE+LbXAtx65hmmfeFlpQrFdy+xvkA5rSKEhWZo2WVQh83zht+IjcrRkgnjj5HInHV36N8b3VexdJDNqYPLOpCRh41qQKUjDyqgAZyKs1XaxRPxZ6qPwSARw6gzMWCFlcKRLICNpo8Up9gL+vPldO0mm1OleL4IpZxpd5VXAWb4abcPl27X1GfQdVMfw/nsrLGQSpqmMStsDkdADyR/znF5eWUddHwVBU6kcKfTTwQpHpmRoI3DpE60lk7/AMy/FyeevOcHyH1eo1LzlURStqyqu4tZ+Fb2/QH+lH0xn8yWWAAl4yTtBoSLwzBPmCrr82HbMHiOihj2a0WQptgF5KkEE2OP0ycWR3rLtlSeqs89qm8u1QfD/KeSK4vM8EiFyzcTBUEbVwQt9h36fbE1EjSNvJHJJBHF8A5UjFCGXhhfzFijWenGDSpnOpx2UkdNZ2ZpCTZYhfqBZyiV9mor1iUcerkHBCyWlHgA1Xqet5nmlPmPIas8IDXQChxkxhydcsyUEFi7vLZpWc/MheBg2D2xYmJRQTZBIx+fbOlRSPNlNydspNXhWr+owf2yDqPngSOaysnHYZWcEAy9cJqzig8e+HvjEFfzr88vGULQZfnlwODGhh165XMfiH/jX65YCMqm/MtD+E/1yWWmIDz8iM994X4vpk8F8E0WlaNJ0h1K6lCY/MqDdJI4D8U12Dx/jwQDdh6djnS8K1j6OZ9y3p9Q0KaoMhJeMPtpaF/xc11ArMs0N4/4VBpSNup8vXzFHRfxLgBabbEdpNDkfmYEHrxmbW6PUaHyoNTGyyNpoZJA3csgtlI7WKzv62KaGZIdJ+5WBCp1MrAJCpFn4irSFmA/KGvpZHOzUsPikccWoOqlkeWCOC54IlSt7yCra6JY9h/bMU2vZq5r0jwm2wao+/f3LXihQ42/zsqWOo3ELnS8USNnaVI0jkEjJKEAClh/2jgX1FDn5jMWmTfLAp6brPyAzpTtGLpcn0TxLQvqdTEqMqRw6KSTcwsJHHHtUHvyQAPqcwazxY63TQadYvL1cohgkYMBGd1IZAx6X39MafxX/wBhpyXQzNCsThSN5YKRRHWhyfqM4u2Ry5IIvp349weKzxIwf/R9BhjGcaPb6+fTaPw7yi6RRbBDGEKlyAoACC/TvngnnLzkwFkBkDKQQKA77iOtf39cqkouUVY3YcEopr6m6wshiQWbkl4J7Kg5ev6Ztjhp/rGseltCySNNcxVlX94F9LAK187r7Z0/CoW1vhOt0KEedp5xqoQKs7hdc/XOIZpTuRVLICSATwr7as5r8L1suhePURLbbWjdSeGXdY6fpnS8cnH4nFmzQbpl+p0Gk0p2S61G2sok/DIGIsAlULGifX0zWnjcX4SXRR6VYohuSHYCXMZHRnFGz/Eb/wAZytY/4nUzaitqu1qvFgfQAYDQFduAMtYnkS3OT8kcT+BXQGzrdUeSe3rkHPHP0JxmAFdqs3/zjxRSSbhDHLJQG7ykd6sE87Qc6bSOQTaB/N9zm/wyRdNrdFPdbJQGvkbH+A9fnmUxyhQ7RyhNwUM0bqpJG6gSPT/ec7HhPgc3iEA1byCLRtqDprR0GokC/wDUkRX7J0PBJ+mRNx1dlJNM9lO+m/CzNZLeWTtDnaDV2e1ZyfE9VoW0UaPIvmDTqZBZC3tsg5om0kZjZYXlWIAHYXYbhXADAFs5M/h26bw2XUlYULQs2nl/6jt+cK4b+FR8Tn0HvnkQSbO98K2W+BwDSadPiPmza7R6p0IA8tH81IwfchSTmX9oJovDfHPxksTSiTRSxKoIW5fMIUluwHesEHiUU+v8a1LusemWLRzQNKQg2wTbFJHclTdAH5Zg/abU6/WamJdTpooANN52nRCxdo5v3itKX53EC6oV0zujFuRxt+zi6rX6vxCS5n2I7qqxwgKgBIHCn07Wc7uvaAQaTQ6OZVhgR4XSZAyxxgh/NZhQPPG6urHOV4R4ZqtedTPFH5o0cYlWKrM01ghAD7WfoB3y7/0nxKGTTarVwxojM0smmJBlhgVh8U6HpxzVk1ROPI4p99G+FXao4uodGXcDy/xMAoVVBZjRJJahxX/GdWbw94/CtBqpC6SyQebIlkN5Q/I6g8/lq69ffjpP+z3hsbedOZCjORFHFIVZ2rdXTt3P+aI1ml12qgjR9S03lI6RmVV3KrCtu5ADXzw/lQk0V/EyJNonhsYn8Kj07P8Avk/GKSke57MmyP4qPJFBSB/Ea6c+l1eogGid5kEarpzcEh/e744x+72n04GeI0Gv1Hg+rjaVSI38uOcfmAKcxzJ29j7D2zoeN+LaiddKkZgEZWSTfC4diJlUFSelVWc3kePKWVV/V8mcJ/H5doqOtZDpJNxEiRaHWqRZPwSyaeVa91Zft7Y3jWtkklk0QlexZ1pJFGV/jMYVeiQpQ68seeRxyPxbrJpxGE3xxKhL22wrL5oofQf71pmmeQ6iRmtpllmd/wCYFib4/maz9PfO7D462U5Lo5s+b46oLIn4dJnACztLIgJAK0Qq1eYx169vuM6+oQpF4XFGQrjSSPIxFlU+BTV9znJkUJIwuwSaJAF/QZ1VasxhKpUFRHbKy33B3FeD26VgdUHA4P8A3WSB7EcYrHuPSjgU89vriRo+xo6tq+YyznKVJ3Ak9bAyzccokXCvXIB09sPf64hhIysjnLTiVgABeQ9cI6jIcBCr+Zf/ACGXZUn/AFEH/cPtmvYnoMTY0ILPQE/+PXDT/wAsv3xtiduPlk8sep+2Kxgph2l+5zRpTN50axBvNZ1A3kkADkn5euUeUeOTnQ8NikDaiVBIVpNMpQczys4P4dG7XxuPYcfxZMnwOPDPUw7NXqoVZdyaNUlaIjelsSERm6USCz9SxFcLH8T+MzqIZixtkikarNk1yc26TS/hNNIzkGeZzLqJAKDy18TADgKOijsBnkfE9UZ9S6K3wfhdWB/3EoTf6ZzRVss5csgkbUFyWLRRsjHr1Dt//wBZNDFckrdQCAp9d3N5k8wgD1oVf3zoaBJRPvMQIhG6aGT4fMTqyrfeuR7jN3wuAL52EeoB4YqiMA3/AI8X8srebUMxjmZQvAKkMoc10ZhQ4+ebnfwHUktokmB07q7ebEEVlPT8rfmsCr9SO+IoSQSOwB3GvahnHOa9o9jw8c9XzwJC+nC7diR1yVSip97GZpZQ7STEWijZEp4sX/c4ZdPECxB2kAm+1XRFfLMcivbbiWCgMRyBVXXGEYxbtM2yzlFa0WxLIU4BZjuLAC7snnjLNPA0ka7ZI1ffJcUwaMgbjVMw2n7jO5A3hUcMb6rwyODTeQssbRk+a6OobfCJqDHnoJL4uj1y2Dw3V60vPokRNKvwx/iHYpKw60SCTXAJG0XdXXLl5FL6PJ/Gm7bOJ+B15BCRB+B+SSJufo2E6TxAMqfhpy7/AJVWMkt7gDtnph4E5MSSxaYEAF5EbdGo79le/TOmmn8N8Pg2qRGhYjc7s0kpPqzkmh6Zk/Mb6RX8eP2cHwrwV0lXWeJiBIolLRQSlXBf/wCpKB8Pw/wjnnk8Cjdo/EI5NdPpdNZSYtL5gVVCtvX8oQVeYvHvE9E8bJGVKg7dw4Hzs8k5l/Z0rJ4n4WETUCR9SYivlybHjdCVbla4r1741GU/nIp6wjqj16aotq/2eiZiSND4jMSOSm6SOAghueqGv+M0eIyTLqNFpNNqQs+sMck7BUZBEZlhW4/UDew5v3zjpIyeM+ErHcnn/wDq0cPlqW3QnWSPfHYGwT0zTu0up/aKM6Jnlk08Up1zr8UUM+0RRR7x8N89PW/TNDkZRHP+1Gsn1ixeTJFBqZtMkss8kY/dSGPdsS+ePXEn8I8QdpG13i2mMkwKyQGaCEmIHiMs1yBD3ocntnRVdPpY9SGaa9Vq5pJZFZPNVZX8wxQc7AxB5YXQBPVhV76zwjTwyRafSGE1VLHGB6c/EWPzN3mW6TNljnJWkePl0y6WbUM2p02rlkR3RNKoKpKq7V8s7yQALHTkccEWOaujmi0uk1gG6GWSRQOfgdOQrfMXWdmXS6LW68xS6mJV3qp3O1hSLZm2ndQ9BV51F0ej8t4FGni0YqONJpP3oVSKmcqAlseaHCgCrN3r+aK9mf45fRj/AGbbT+HeGya4JIHnkeLcjkl5fMeOPajfDY716ZgGvn1uv08CqiRyzFZATvZkG5mJc+tHoB1Oephg8L8LifULKhiR3m04UgxRTSLTyR/PpfpddTfnRp9HOYddGBGkk8zKgG3aqk88duf1zieRTm3R6njwcYpeyarVSajXeSlLEsaRbmu2Lgysfhqrr7DteaJZQsd8AAc7eKAH9M52lPmvNrP4ZHm8i/4iSA8pHpQCL8j65Xrp/wB1NHZJ2L9PiynDpI7VLVWc/wAQ/fBww5UA/fkZx7hraC6sDz12k+vGdPVORqJh2KR//wCYOcmUUxPZvi/znq+O6WrPD81W9kOGFFVvk27nsvestQh11LMAA/lxqP5V3Dj+mZN3FduuXxuNoX/uBP3zss8xr6OwW3mVmPHlRRLfYDdIf6/pnP1QjCIb+NjuAr+H157YwnMgIUEkE9Cnbjo3+MzOVJJO8sRyXPpxWH/JCXysSiVPqORlQsZetUT7ZR1zFHU+hr46elY9n/byvHoev6ZViQwJHXCLv54oGMO2IB6xTjHFrACDqMBu8PTFJN9MYic3Y6jD5kv87YMaOGadisUbNRG5uAi3/M7Uo++IOfRBJJ13mhyc1Q6fxKdEdF2pIypE0zBA7MQo2g/EevpnQ8O8O0cG7Va6WJ2jaNoolYNEw3D1HxN6DpxfOdbT6qPW+I6UiKUQrIkpYIzJv0wd0BYKFA6bvXbXfOaebnWCOmGJOO0mOn7P+HHzNzTv5CyecVlcKzxL8Q4976f2563h2hjhh0TTCINGFk08ShxDC+09FvluTycp8M1KErFOAsetTz4gx5bz0AdQfbj75TptcYtNpYtW6efp1kiouv75Y3KKwJIF9Aw6gj75232Q0bPFvFBFppNP5LCeZZIwxI2KnRiD3PYZ4iQsdRKD1RJF57VG1jOtr9TO7xPqCiny/wB0ituO27Lt7f1rOIsgd9TIe8Grfn1ZCM0gBu/Z/wAPXW6rfJwkAO1tqttZV3F9rfCSLVVBFW187aPs4PCfC4woVtZ8JYsZtSzgXyeHFfYDPK+HPJotI5WQJJJpWf4vWSRYg30u873i+sWDTSQIx3Ss0Zc9aHMhX+g+ecfkSnvUXwdWCCm6Z5/UNpBK8eghEOnMjLp0UsxO3gzOzWSfe+/tiiogFLcgCvb2rGiSvjIokAKv8qDouVuCxqubP3yLt0e8oKEeBJXBK8jlhfy75nlYFZCTZkYn/wC0cDDORYKmwqhVP85/m+WUvZUgmrAW/c8cfLrnRGPFnFlyOz0un8R8d8K8O8MIQajRzaWHUL5kSzRwRbeVP8QI4Ppzm5P2rMscztsQJHyCqqzMBwqUa57ZSNU0MWjUUToyI2ROFXTKkjsjkeihb9yBnB1Bingl1EUcaTSENNGQFXeCSXjoUL7jOZY4zfK9nG5UdWPx/wAU1U3laXTrJNTSANRES/zNdIPa/wBc2x+CrMPO8b1eon1MnxHT6eQpFHfQFwNxPrQA+fXON4TqYtHFp4moSTTefqG70tkAn7DNsPiZKzarUSFf3gWPdfPw7tqg4Ti4uoKgu1bOsNF+z3h8L6uPRQiTTwvJE8qmV1YcBgZCebyzT+P6SRdekKyIsGilWKVj8TTSKY1YV07m88p4h4vPqoniQLHpxa0pJMjsbBZuvHWsy6eV0EqdpE/UWf75WPA3zN8mU5KqR7lWjlLwws0S68RacHT0kul8D0kb0kbDoZdrMf8A9RfXO8Y9BotPptHp9PHpoiYyscIAVU3KpLMOS19ST2z5nptXqIp9NUhUF54GNn/pyQtDR57WK+Wepk8ZOt0KFX2ayCJJoweQZEA3r8jR+336XGjlO74h4BFqPILaueNYo5I6iWIMQzbuGKkC+/w2aHIHB8P4xCPDjqtJA2slLy20+rTa0cQRVKo4Cggnoa4HF56zU/tFDJ4ZpNUCVMsaEwj+JxQYeZyOPl/XPAeJ6+bW6qffuVHdpNrMWJ7Aux7gcKOg+tmFjtm0c04qrOekgjlSt1WDYNEX05zsjULLHEZIdZIl2WBco9c0GAP1zg8ksSD8RB5PboKzVp9VqNOQYXIVtwKEnYSRtvb65eXGpLg1x5GuGbfEvFXnIiKbFiCokbA/CFFDd0+grDE7RaKNWdi80iK456z38IA6cGjlUun3y6qaYl5liEsrN0MzqXJofTMr6lv3TD4QBHIoJ7qoWx9bzJQTWsTvjJxdyO7qJI4VsFVRFCBRwFVRwFHTONqZCy6tq/LEn3PNZXNqzMUL0FpSRYPz5yROkserUljJIAAdpKbgRwX6We2OONx5Y5ZoydIr8QGzWTL/AC7U+ojVcwTigh9CR986GrBk1+qvmppmP/8AMj+2YtQLUn0IOdWP0efnXEjNXQjp/TDwAT+n98UGiPfg4SfbpxnUeYWRsoQggHk8kc4hJJN/5wZMG/QkuR7pSPUHK/XGbofkBiZCNWOos/bNNp6HM68EepP/ADj/AHxNlxXAovCCQRgHHXJ1I+eWZFhPtg3ZDQxbvt0OADEk4OPTJeCyeFHJ6fPADb4dozrZypoRRBWlJYi93Crx+v8Azno00vh8ChCYwsY3FR8KAnmyq8f1zlRA6PR0hBdmEkpH8VUf04rM7TlnYWdpJK/IndnPL5M0So9Mk+jVVY7aBNWo+EUP85lm1Oljm0ksdWJHDiM/Cf4aphYsHg5ytzhY1Z1UG2tm4tgOAByT06DNq/gYFjfUOiuRcUckavMSQKeTfarfYUTRBPWsyaotEl1LHReFLYBjMkUTngJPp2KqH/7XU7Tz/CDleoZp3rUReVI5LuH27lmICkqXtSG4PqLPpyQINVptRDC1+XKNTHfO0EFSKKgel8ZevkPDG0LQFXjHm6XVo7QhhwVVhTLRvofpjGcnVeZFtjO2pLcyBXBkCnaA28k8c7h2P3OaMWZx/wDkMv1eREA/rnXnfTtp5ojp5UaNVkjEjCaNXsJay8Eq3Q2ARx1zmQmJ5YIUQh5NRpo2N2KM6GunbnNE+BHQ8T+HV6XTgWGhj05XkcPKO689QMum1Emqkg86i4suwLkuqkBbDGvtieJ0fG4VPRJdMCf/AL95wQhSZZeT8RA4/hvOXN6PT8CKfJe7ELx/ozMfyuaJHShwWs1V+/fGcySGq2qOw7/PK5mITyx1CFnP8o/znPFHr5JdmY3JIzGuDtFflsfy+w7ZJk2qFr+B3Pqb4y2OPhB/2qT9ectlSijkfCo2t7Ke+b7JOji/E3FtjzCZdLuk8Q0ATUFZmSN3ec2ijy3SO+lc9M5fmykgLtNGyK4J+V5oSOMtJGVQ7WNHuV+mWGNF6IB9f8ZakoqjheJsy75wbCDn5/5ws+odWJFiMEkcEIvHSzlx9lFdjfGVsBRPHuO2WpEPHwUGU/CKG1Se3Nnv88JmYbSKXaLFkD9MqIFk8YtA5tRzcnWYgSxkeoksd7ojNIdkeQDja29a9DznN0j7yI2NlF+AnrtHbN8vwvG3qtG8lozfBqhbTLoZI25ZdVIyAnkxyAMKPtnM1IWib6cg5a+9CwUXvFEA9hyCPcZl1L/um5F/rk07GjGsrUBXSu/TNfhqtqNbAjL+7j3TvVfkjHTn1NZzwasn06D2z03h2hj0cfnM5aedIVYdEitt+0e/rizSUInV4+N5Jr9GqPRamSHUCYKsmqkdpGDElFaqUHrdADrhj8H8NiVQ0atX83+3+uXmdpPMETLuQhfiBClh8u2YZtXSsrgxyB1tb3bkPFqf6558ZTl7PYcYLsTUeHeHKJHEQBQBrBNcHpzlSaSNtSsENBIodI7DqC28sNw9cdJ/xCiCz+/en4JPkp8bf0ofPH1Ei+G6aWQlRrdaW2WeIk6X8lHA9z7ZqnLq+TKShW1cHBkctPqGv87yc+tsemUyD4CPUHNUa6ZOJ3BXgsY/iIv+UjvmWV4PiCygGiQHq/0zuj3R5mR8WzFjGsDArW4EXyNwq/vgzpPMfAcYYOMI47YMExgNw+eKUK4wPSu/X74/Xg5F0bdidxltr/pyro1Y3P8AtYDQp7ZK6fPIOwwk/wBcsyDQvrx88PHqPvgFc5KXACEjLY12iz+Ygc+g9MVIz+Yg7R0A7n65YCOgViSeprIky4r7NT6gsir320fTM6W1VyR8JHeh0IwHpfr0xVbbdEjmxXp3yaLOnAYkdmCBC0TNMaplUWQp616kD++UTSiYuwBVRLIIh1AjCoAT7nkk++VrJsgdK+ORg0jH7hfpxeS6Va6XtA9gijIr2Mt0uol0ziWOja7XVukiHqrDNmhcS6idFViklzKOpRj1BzmEkihxhFr3N3YIJBHyrBqwO3PGGDxnlZA8RrsWWhfyNZwtIW/FaNg7IwmjJZCA6gHkqT3HbNWll1Xn6OEzM8Mmq06sklNW6VQQC3PPzyvTRouoZ2ajDLN1BokK1CvnWEVXDEy2OV2YzSszlnkk3ud0hY8KWZuc7nhfhPiGv0c8sEaMIJZIVjDU8zILYqT8N9uuee+OOPTLxu8xCQewBB5rPp37PhNJ4Po14BaHzWP/AHSkyE/rnJ5T1SZ3eLllC0jwhOwuhtZEYq8cgKuhHZlPNjM2qKIrgFd0rc0bagB+mdTxx4z4nOyEH9ypevWyM89qJmSSgBW1TyMMUNmdWfymocmldWymxGpWgOCb44y2eXWKql9K8QNUZEcWD3G4AZn8LmSTxLwtJgvltq4Q1/Pj9az6B40dMEaNgrK6VRo0doxZnHHNKuzLFnyTg1Z84bUPF0ZdwABrazccV0OH8TqVNMy0wscA8fQZVM3lyyxoaQMQAKHHzrKmZrB5vgHnt887owi+aPNlkyJ1ZoOokPRlur6D+4wGV2BBI96FZQeSD0r05P642/2GXpH6J3l9hO33++LY/wBOQuT2Hti2398dE7MdWZHVkJDKbBzqrqF1MKMOHU7ZFHY+3tnHs+mRZXjdWXgigfQj0OKUUwTZ3JArRAsQABdk1z9c5OqcErVlSTz6/K8dGl12s0unHwrJMsaqDarxyxyeIRCFmQNuCuQrV1zPppGiXxbKtLEZ9RpogL3yLu9Ninc1/TPUuzHyAPytq6PyWGQjOR4DECdVqmH5agj+Z+J6/QZ09VIINPDLW4jUK1X13JJecfkS2nqvR63iQ1xbP2SN9k2rW7AdWHydQcx69zYbuOQRlsj1q1I6SxhT7MBdGu+Z5iTuU9QbGZwVOzecrVF/hhijXU6x7NGPTRRj8xkc7iqX68V6fTOfqtRPI0momERmbUSQ7HjSRY4o0QqE3giuTmyLfBpHnjcAwxt5SlbImllAZzu46Ch7ZzJnaaIyOV3tqpBQoUFijF0M6cSuTkcPky1xqIq6iSrVYAR/Lp4B/RcddZq0unXkUR5UVfQbazPRF1gNWOSSQb5zrpHmGltZrGBVpFZT1DRxFfqCuc6flyaUWASFUKL57DjNJ7fIZRKttx/KMaEyq/bJfTIARko5ZmWDG7Yl0KHGQWepv0zNo1TLdhK7h1B+4wfX/fvlkZpBuPH+9Mfzo/T9f+MVsvgzemDnHI4GDNDEZQObJHHpliiJTZcm+KA/zlYvIKHUX8v74nY00aDVFkFVRHQ37HEBFA9AbHHr6ZWGo2oP36jG3JbVYBo9Lv6ZFF2E1/xkVSTuPNHgfzHsMheP0N/+Jv8AQ4PNsULH0Fj2A6YUwtDuaDC7PI+ZPU5cQfLjPq0n24GUReSxIlEgABKbADZ97OXrvdUDlUp2CW1AA1RJHe8T4GuSAbhY54Jsc2PbJ0oZe3h+vjKNHD5ifn3Q09qRxYvMxahGpVxIQQ6MrKyEdiGF/LFafQ+Rg7xMsqGpImEiN6Mh3A85RNqZWeQo5Cs5boF5bk9PfplxBKkAN8QI5U+mZxp5z/AQOOtce/OXFIiVlMjuyuSx4Vu57jPqyTCDwiFiaC+HwMPpCufMfwsku5U2KHIjj3OGLl/hUDb1PTPoPjzfhfDtPpVPxNBDpl9TtCoT+mcfl05RR1eMmrbPJu0jB5ZCWkmILE9gegzmasEzf/tp/fOo/wCSrFWKNivQDOfqXRJQGTcxRenbrlYXTNfIXxMQ3AqVJDKQykdQQbBGe78H1LeM6cvqCDNprhmA7kraPR7Hn6g54xjK4NR0B1J4r6nN/g+rn8K1n4kkeQR5OrSzzGTV/NTyPt3y/IhvDjs58E9JV6KPFYPw+rdB2v8AqcxG89D+08Krq4JAaWWIlSAaajWcCvTkf71y8MtoJizR1mwV3yVYw13FHqb9umHkds2MRCv2xa9MsIPpihWugP0vAKDsfjg+3vg8mY3SP9Bnb07BNF5gVWZWAp+OrVRHXAdY/wD9CEdP5/8AOcryybaSOlYY+2Z/CYTFO+omRv3YWOEEgEvKaZuewF/fG8VdJ2EelhY7T5jkcjjou6gLy38UzWPJi5P/AH/5xklnlkSGHTo0rnaiqGJu+vWqHc5m5PbdmyjHXVF+n26bS6TTrRIjMkhFcsRuYnLtWoOkiLdIp4JXN9VRD8P1NDB4tDFBJpYYdu4aWLTDbf72UH4nA9Dff09sq1vmTNp9PGriNpkiLsCoZ34JG7mgLznXyex6UX8NTj6mSZJkcMRNtE0h9XkJk5B46EDIuulLgSorflFra2SQPljzwaieWWdImMcjsYjf/wCH0X9BmnwjwrUanXadnhvSwOJp3JtSF5CiupJrpna9VG5Hlbzc2oFsu5tAvFHzliZTd7l3kg36E5h00cBHjDyAboYF8qx0dm253f2hWYylUSKPTs4KjlZTIqDdus1Xyzk6GIfhfGnqyIgpJ7AU2ZYZfG/s08vmjn5KAN9/96Y1DjJ0Odh5xKFDrlLWHHyGXc5W4UuLJFr2/wCcQxJGU9ACxe+B2+eMqx/DaAmyO/N9zhAjXvf9caj+YigFPXi79Mm2bKKXLKpI41Brgg9OtjEULfJ4yG/nffFy0uDJtN8FjOCFA4Ufrhs+364g6jHr54yQ7QQOfvgAX5/U49dB6ZNvXKsVC0MlDDt6nJWAArpx+uQDCMP+cABt+f0wAf6cchq4HWh7V3yBD7X88ALIR8QIr4SDyAwseoPGdaDV6VDF5ujSkqn04AcEdCVa/nnNhRuSF4+YzUAeAV4+YzGaTLjwdPT6fQTOraPU+XO7G4g7wvbGzag7Tf8A44JtfCyazSfj45NQsbxxu+hMreYDVRSpS32sqK+nPP28ggWRyvIBBHcHrgVAokADqJGVpAJPzkciycxWPm2zXfgIQ+m0GqG7cRx3agP0zdoV8OkC6fVRtueZQHFj4Wpa3A8HMyg0OOnvjBSf4evGOStUEJau6s9fpPCv2Y0CrqotOJ54STp5JZDKyuLoqjHaK7HbnD/aSaSd9PO4MOmjCxqzEEM7WzE3xXAzl/h42O4pyor8zCh8gay1laRYo5A8iR0Y1kcuqn2DkjMI4tZKTdnQ8sdWkjlIzkBYUZ13Bg6qVU/IONvzx/8A3115SGwPiKENVcj4LGdOjZGw12NjCN3NKfpX+c6N19HLTZzE0c7U8jClPwgqDwD1Ibj9MtTRxK6u6+aN4aRXJpxdkGqzcAab4WFNY/LVEc9D64aII+E/MVWQ5s0SS5NHiTJrvDYtUq1Po2ZZVfb+Vh3s/UVnFj0ss4Ekx2FgKRBzXUbif8Z0io7g0COtYVr+VrPyzOFwVI0ySU2mzF+Ej2shOzkFiFUkgc8sRdemYljDSAJscbCwCBy1L3YV3+udp0STaGiLFW46cg8EXeVrodENpWJeANrFnJ+XJzWOSuzKUU+jmoHiRW1OnjjRiAp8seYzHkluboD2zbEiMiuiEAk1vQoT70ec1eUh/gUAdMhhU/wi75JBP9/75LmmCTRQyFlZQKVgAeOwNjriHSivzP26Bf8AGa/w8YsAAel9a+WN+Hho2Aeg6HFskP5dGeHSaIFH1U7iMts8tL8wjuaRb+XIGboddo9Mkmm8M0rRGYMJdTqgxeT0VSRde3TKhp4QeFWu4r/OP5EN35S+xrMZpS7Z0Qya8UBYnV5tZqJEaTaArOSI4Uqj8Tdz/wAZytfqiriUOyPtf8JGfhKKVKmeRT0JHCD651H0kUpXzGmKqxdE85wit6gA/wB8I0ekQkrBECeSdoZj7lms/rhBxi7fJvkzbR1iUaML+H0yMNyCCNaPptA4ONq9fqNE0UaMaeLep2ruUhiAb6dvQfc5b5RFbBwv8PTj2zn+KvH5ulvgiCjf/m3FHNlrN8nBcsfMTO+qjcu0w1c0rlNzySRfDtsjZ8NDrzxhXWaaKHVwxaZx+JVwzPIC25gBu4H6ZkLx8/Ele5GVs8K0DJGOOPiGdCjH0ZSnJ9hoYpxg0ZFhlN9PiGAleOV+4yzMFHjKZvzL/wCOXgi7sUenIymeyybRZIPC89/bC0FFXp/8YevUk388ddPqWorE/wD9w2/1y1dDqj12r8ySf0wbRdMzkj/4wCuBm4aBh1fn/wATjDRV3Un33kfYZO6Gkc/vlu1vX9c6A0yLXCX8j/fLfJf/ALPs2LcrVHLNnoT9MgDV1P3OWMAGIHY1+tYwUfrml0ZJGem9W/thpvU5cVANe+EKp7YWOimie5ybb6k5dtX9MG0VhYUVqoBPJ7Dk49YyAbV9wCfrliKprj+IDKJLoxSr8heWgmvrhRFPHtlu0cZiykV9a/tjgA9ecdVWjwOmTviGEAG+mOKyBRYHvlmxczZSEtR7365Nxv8AwcYopwmNOPpiGAFuPf1xqY37nsKrDtAoDuctAAA/wMQyqj6Hvh5P8P8AX+uWkf2xSxHSsVgIF62vf3/vliqOwrF3sK6c+uOCT1x2FB29+cAQbjfAeiSem7sT/fJZvHUA3fPIyGNcFdwCTyTLCJjJ5QjLguZL27a9cYpsYhqB6UTRH0OVJHCTL+6j3RylVfYu80A4JYi7F0MfyouuxN38xVd3T1q8jUvYO0MSdwAoVRGQhRVsK57jrkKJQ+Fe/wDCPT5YVRDu4HHsMaiGxDLAiszyqqjlix4HzrF/GeH9Dq9PfX/qL8stEUY3EKAaGMsUZ7fYD/GGq9hsUfjfDAOdbpr68yCsJ1/hYHOu0n/9qX+mWGKOy1C4zvQlVNEA9iKy1I4ysbbEspG3CrQ3KDxxkyjFApsYIqnqNxo8kdCLBo84AkfNmP06j++WiOMEfCDYs2B1xliiPVE9egzLotOyjytOw2sIyD2IWuOe+Z5oIwzPasSSW3lN3J5NnOkscR4KL0HYeuWDTwMCSinjoVUj7EYJ/sfBx1ghYWqRMtkbk2MLHXkfrkOm09NaLxfBVTf6Z0nghSObYioEIao1VQT0tgorKmijscHE5P7Lik/RzW08NcRqLA/hH6AYvkrXAHN9B6fLNzRoG6dBlRpV2gCgSQK7nGpMHFGIxKCOPmRRyspXIXj9c1MF3AbEF9SAAfuMBUH79s0UvslxRk2ev65CorgZpMaWOvfFZFvp0y1MhwMrKOOOcSz/ACt+uXOANn/ljBAQDZ5APbLTIo//2Q=="
    },
    {
      title: "Inspirational",
      img: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=600"
    }, {
      title: "Motivational",
      img: "https://images.pexels.com/photos/2853548/pexels-photo-2853548.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Humor",
      img: "https://images.pexels.com/photos/6324410/pexels-photo-6324410.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Fashion", img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 pb-8 place-items-center mx-10 sm:mx-3'>
      {
        categories.map((category) => {
          return (
            <Link to={`/quotes/category/${category.title}`}>
              <div className='lg:w-96 w-72 h-60 bg-sky-600 rounded-lg flex items-end mx-4'>

                <h3 className='text-xl text-white pl-5 pb-10'>{category.title}</h3>
              </div>

            </Link>

          )
        })
      }
    </div>
  )
}

export default Category