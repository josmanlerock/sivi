// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
}

       window.onload = function () {
                var img = document.getElementById('target');
                var button = document.getElementById('saveImage');
                /*
                img.src = 'white.png';
                img.onload = function () {
                    button.removeAttribute('disabled');
                };
                */
                button.onclick = function () {
                    window.location.href = img.src.replace('image/png', 'image/octet-stream');
                };
            };