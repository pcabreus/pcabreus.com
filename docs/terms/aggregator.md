---
title: aggregator
keywords: 
related: aggregator.md
state: draft
---

# Agregator

An aggregate is an encapsulation of entities and value objects (domain objects) which conceptually belong together. 
It also contains a set of operations which those domain objects can be operated on.
**source: https://medium.com/ingeniouslysimple/aggregates-in-domain-driven-design-5aab3ef9901d**

A DDD aggregate is a cluster of domain objects that can be treated as a single unit. An example may be an order and 
its line-items, these will be separate objects, but it's useful to treat the order (together with its line items) as 
a single aggregate.
**source: https://martinfowler.com/bliki/DDD_Aggregate.html**

