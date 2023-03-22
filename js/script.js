// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function is for calculating the area of a triangle
 */
function calculate() {
 // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById ('base-and-height').innerHTML = "The Area is: " + area + " cm² "
}